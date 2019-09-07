import * as Yup from 'yup';
import { parseISO, isBefore, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import Inscription from '../models/Inscription';

class MeetupController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      place: Yup.string().required(),
      date: Yup.date().required(),
      hour: Yup.string().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Request validation fails' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res
        .status(400)
        .json({ error: "You can't create a meetup with a past date" });
    }

    const meetup = await Meetup.create({
      ...req.body,
      date: parseISO(req.body.date),
    });

    await Inscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
      type: Inscription.type.organizer,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = await Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      place: Yup.string(),
      date: Yup.date(),
      hour: Yup.string(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Request validation fails' });
    }

    const meetup = await Meetup.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Inscription,
          as: 'inscriptions',
          where: {
            type: Inscription.type.organizer,
          },
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: "You can't edit this meetup" });
    }

    if (isBefore(new Date(meetup.date), new Date())) {
      return res.status(400).json({ error: "You can't edit a past meetup" });
    }

    const updatedMeetup = await meetup.update({
      ...req.body,
      date: parseISO(req.body.date),
    });

    return res.json(updatedMeetup);
  }

  async index(req, res) {
    const { type, user_id, date, page } = req.query;

    const meetups = await Meetup.findAndCountAll({
      limit: 10,
      offset: (page > 0 && (page - 1) * 10) || 0,
      where: {
        ...(date
          ? {
              date: {
                [Op.between]: [
                  startOfDay(parseISO(date)),
                  endOfDay(parseISO(date)),
                ],
              },
            }
          : ''),
      },
      include: [
        {
          model: Inscription,
          as: 'inscriptions',
          where: {
            ...(user_id ? { user_id } : ''),
            ...(type ? { type } : ''),
          },
        },
      ],
    });

    return res.json(meetups);
  }
}

export default new MeetupController();
