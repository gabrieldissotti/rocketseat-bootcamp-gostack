import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        place: Sequelize.STRING,
        date: Sequelize.DATE,
        hour: Sequelize.TIME,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.File, { foreignKey: 'meetup_id', as: 'banner' });
  }
}

export default Meetup;
