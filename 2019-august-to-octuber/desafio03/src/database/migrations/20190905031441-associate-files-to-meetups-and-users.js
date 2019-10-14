module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('files', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
    return queryInterface.addColumn('files', 'meetup_id', {
      type: Sequelize.INTEGER,
      references: { model: 'meetups', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('files', 'user_id');
    return queryInterface.removeColumn('files', 'meetup_id');
  },
};
