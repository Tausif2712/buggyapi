const userDb = require("../models/user");
const { parseISO, format } = require("date-fns");

function extractDateOfBirth(isoString) {
  const date = parseISO(isoString);
  return format(date, "yyyy-MM-dd");
}

async function handlePostSignup(req, res) {
  const {
    fullName,
    email,
    phoneNumber,
    password,
    dateOfBirth,
    gender,
    profileImage,
  } = req.body;
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
      profileImage,
    });
    return res.status(201).json({ userCreated, msg: "User Created" });
  } catch (error) {
    return res.status(404).json({
      msg: "Inavalid Signup",
    });
  }
}
module.exports = {
  handlePostSignup,
};
