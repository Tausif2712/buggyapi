const userDb = require("../models/user");
const { parseISO, format } = require("date-fns");
const multer = require("multer");
const path = require("path");

//
function extractDateOfBirth(isoString) {
  const date = parseISO(isoString);
  return format(date, "yyyy-MM-dd");
}
//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/rider`));
  },
  filename: function (req, file, cb) {
    console.log(req.body.phoneNumber);
    const fileName = `${Date.now()}-${req.body.phoneNumber}-${
      file.originalname
    }`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });
//
async function handlePostSignup(req, res) {
  const { fullName, email, phoneNumber, password, dateOfBirth, gender } =
    req.body;
  const profileImage = `public/uploads/${req.file.filename}`;
  console.log(profileImage);
  console.log(fullName, email, password, gender, phoneNumber);
  const dob = extractDateOfBirth(dateOfBirth);
  const ph = `+91${phoneNumber}`;
  try {
    if (phoneNumber > 10 && phoneNumber < 9) throw new Error("Try Again");
    const userCreated = await userDb.create({
      fullName,
      email,
      phoneNumber: ph,
      password,
      dateOfBirth: dob,
      gender,
      profileImage: profileImage ? profileImage : "default.jpg",
    });
    return res.status(201).json({ userCreated, msg: "User Created" });
  } catch (error) {
    return res.status(404).json({
      msg: "Inavalid Signup",
      err: error,
    });
  }
}

async function handleGetProfile(req, res) {
  const { id } = req.query;

  const {
    fullName,
    email,
    phoneNumber,
    version,
    device,
    totalReferral,
    status,
    dateOfBirth,
    gender,
    profileImage,
  } = await userDb.findById(id);
  return res.json({
    fullName,
    email,
    phoneNumber,
    version,
    device,
    totalReferral,
    status,
    dateOfBirth,
    gender,
    profileImage,
  });
}
module.exports = {
  handlePostSignup,
  handleGetProfile,
  upload,
};
