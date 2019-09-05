import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
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
        name: Yup.string(),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
          .min(6)
          .when('oldPassword', (oldPassword, field) =>
            oldPassword ? field.required() : field
          ),
        confirmPassword: Yup.string().when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
      });

      if (!schema.isValid(req.body)) {
        return res.status(400).json({ error: 'Request validation fail' });
      }

      const user = await User.findByPk(req.userId);

      const { email, oldPassword } = req.body;

      if (email !== user.email) {
        const emailAlreadyInUse = await User.findOne({ where: { email } });
        if (emailAlreadyInUse) {
          return res
            .status(400)
            .json({ error: 'Email already in use by other user' });
        }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ error: "Password doesn't match" });
      }

      const { id, is_provider, name } = await user.update(req.body);

      return res.json({ id, is_provider, name });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
