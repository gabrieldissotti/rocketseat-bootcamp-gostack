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

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsTo(models.Meetup, {
      foreignKey: 'meetup_id',
      as: 'meetup',
    });
  }
}

export default Inscription;
