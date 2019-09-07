import Sequelize, { Model } from 'sequelize';

class Inscription extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.type = {
      organizer: 1,
      participant: 2,
    };

    return this;
  }
}

export default Inscription;
