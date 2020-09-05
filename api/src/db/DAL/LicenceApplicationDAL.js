const models = require("../models");

const LicenceApplication = models.LicenceApplication;

async function createApplication(applicationData) {
  const newApplication = await LicenceApplication.create(applicationData);
  return newApplication;
}

async function updateApplicationStatus(appId, status) {
  const application = await LicenceApplication.findOne({
    where: { id: appId },
  });
  application.status = status;
  await application.save();
  return application;
}

async function getAllApplications(filters) {
  let applications;

  if (filters) {
    applications = await LicenceApplication.findAll({ where: { ...filters } });
    return applications;
  }
  applications = await LicenceApplication.findAll();
  return applications;
}

module.exports = {
  createApplication,
  updateApplicationStatus,
  getAllApplications,
};
