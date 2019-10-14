import Mail from '../../lib/Mail';

class ConfirmationMail {
  get key() {
    return 'ConfirmationMail';
  }

  async handle({ data }) {
    const { user, meetup } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Inscrição realizada!',
      template: 'inscription_confirmation',
      context: {
        user,
        meetup,
      },
    });
  }
}

export default new ConfirmationMail();
