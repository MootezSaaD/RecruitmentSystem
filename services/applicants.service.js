const { Applicant } = require("../db/models");
const skillsService = require('../services/skills.service')();

function applicantsService() {

  async function getJobApplications(user) {
    let applicant = await user.getApplicant();
    let applications = await applicant.getApplications();
    return applications;
  }

  async function getApplicantSkills(user) {
    let applicant = await user.getApplicant();
    let applicantSkills = await applicant.getApplicantSkills();
    return applicantSkills;
  }

  async function setSkills(user, skills) {
    let applicant = await user.getApplicant();
    let skillsArr = await skillsService.storeSkills(skills);
    await applicant.setSkills(skillsArr);
  }

  return {
    getJobApplications,
    getApplicantSkills,
    setSkills
  };
}

module.exports = applicantsService;
