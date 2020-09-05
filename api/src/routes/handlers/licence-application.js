const {
  createApplication,
  getAllApplications,
  updateApplicationStatus,
} = require("../../db/DAL/LicenceApplicationDAL");

async function newApplication(req, res) {
  try {
    const applicationData = { ...req.body, applicantId: req.user.id };
    const application = await createApplication(applicationData);
    return res.status(201).json(application);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        "there was an error while creating application, we are working to resolve this.",
    });
  }
}

async function allApplication(req, res) {
  let filters = Object.keys(req.query).length > 1 ? { ...req.query } : null;
  try {
    const application = await getAllApplications(filters);
    return res.status(200).json(application);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}
async function updateStatus(req, res) {
  const applicationId = req.params.id;
  const { status } = req.body;
  //   TODO: ensure that only reviewer and processor can update status
  try {
    const application = await updateApplicationStatus(applicationId, status);
    return res.status(200).json({
      message: "successful",
      application,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong while updating status",
    });
  }
}

module.exports = {
  allApplication,
  newApplication,
  updateStatus,
};
