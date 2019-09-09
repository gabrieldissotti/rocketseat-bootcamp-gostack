import { isBefore, startOfDay } from 'date-fns';
import Inscription from '../models/Inscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

import Queue from '../../lib/Queue';
import ConfirmationMail from '../jobs/ConfirmationMail';

class MeetupInscriptionController {
  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetup_id, {
      include: [
        {
          model: Inscription,
          as: 'inscriptions',
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: "Meetup doesn't exists" });
    }

    if (meetup.inscriptions.find(({ user_id }) => user_id === req.userId)) {
      return res
        .status(400)
        .json({ error: 'You are already registered for this meetup' });
    }

    if (isBefore(meetup.date, startOfDay(new Date()))) {
      return res
        .status(400)
        .json({ error: "You can't subscribe to a past meetup" });
    }

    const alreadyHaveAnEventOnThisDatetime = await Meetup.findOne({
      where: {
        date: meetup.date,
        hour: meetup.hour,
      },
      include: [
        {
          model: Inscription,
          as: 'inscriptions',
          where: {
            user_id: req.userId,
          },
        },
      ],
    });

    if (alreadyHaveAnEventOnThisDatetime) {
      return res
        .status(400)
        .json({ error: 'You already have an meetup on this date and time' });
    }

    try {
      const inscription = await Inscription.create({
        meetup_id: req.params.meetup_id,
        user_id: req.userId,
        type: Inscription.type.participant,
      });

      const user = await User.findByPk(req.userId);

      await Queue.add(ConfirmationMail.key, { user, meetup });

      return res.json(inscription);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new MeetupInscriptionController();
