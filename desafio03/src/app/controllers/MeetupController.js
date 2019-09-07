import * as Yup from 'yup';
import { parseISO, isBefore } from 'date-fns';

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

    const meetup = await Meetup.create(req.body);

    await Inscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
      type: Inscription.type.organizer,
    });

    return res.json(meetup);
  }
}

export default new MeetupController();
