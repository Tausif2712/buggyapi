const driverDb = require("../models/driver");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/driver`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${req.body.phoneNumber}-${
      file.originalname
    }`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

async function handlePostSignupDriver(req, res) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    dateOfBirth,
    gender,
  } = req.body;
  const all = req.files;
  const filenames = Object.keys(all).reduce((acc, key) => {
    const fileArray = all[key];
    const filenames = fileArray.map((file) => file.filename);
    return { ...acc, [key]: filenames };
  }, {});
  const driverCreated = await driverDb.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    dateOfBirth,
    gender,
    driverLicense: `public/uploads/${filenames.driverLicense[0]}`,
    profileImage: `public/uploads/${filenames.profileImage[0]}`,
  });
  return res.status(201).json({ driverCreated, msg: "Driver Created" });
}

async function handleGetProfile(req, res) {
  const id = req.params.id;
  console.log(id);
  const driver = await driverDb.findById(id).select("-password");
  if (!driver) {
    return res.json({ msg: "Not Found" });
  }
  return res.json({
    msg: "Succesfull",
    driver,
  });
}

module.exports = {
  handlePostSignupDriver,
  upload,
  handleGetProfile,
};
