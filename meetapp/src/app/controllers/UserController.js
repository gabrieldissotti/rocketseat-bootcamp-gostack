import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(401).json({ error: 'Validations fails' });

    const { email } = req.body;

    if (await User.findOne({ where: { email } }))
      return res
        .status(401)
        .json({ error: 'Already exists an user with this email' });

    try {
      const { id, name } = await User.create(req.body);

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
