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
    JobOffer.hasOne(models.Application);

    JobOffer.belongsToMany(models.Skill, { through: models.JobOfferSkill });
    JobOffer.hasMany(models.JobOfferSkill);
  };
  return JobOffer;
};