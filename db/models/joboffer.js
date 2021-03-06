"use strict";
module.exports = (sequelize, DataTypes) => {
  const JobOffer = sequelize.define(
    "JobOffer",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {}
  );
  JobOffer.associate = function (models) {
    JobOffer.belongsTo(models.Company);
    JobOffer.belongsTo(models.Domain);

    JobOffer.belongsToMany(models.Applicant, { through: models.Application });
    JobOffer.hasMany(models.Application, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

    JobOffer.belongsToMany(models.Skill, { through: models.JobOfferSkill });
    JobOffer.hasMany(models.JobOfferSkill);
  };
  return JobOffer;
};
