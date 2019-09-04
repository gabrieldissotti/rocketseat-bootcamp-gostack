import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string().required(),
        name: Yup.string().required(),
      });

      if (!schema.isValid(req.body)) {
        return res.status(400).json({ error: 'Request validation fail' });
      }

      const { id, name, email } = await User.create(req.body);

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        oldPassword: Yup.string().min(6),
        password: Yup.string().when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
        confirmPassword: Yup.string().when('password', (password, field) =>
          password ? field.required().oneOf(Yup.ref('password')) : field
        ),
        name: Yup.string().required(),
      });

      if (!schema.isValid(req.body)) {
        return res.status(400).json({ error: 'Request validation fail' });
      }

      return res.json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
