import User from "../models/user";
import TravelAgency from "../models/travelAgency";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6)
      return res
        .status(400)
        .send("Password is required and should be minimum 6 characters long");

    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    //register
    const user = new User(req.body);

    await user.save();
    console.log("User Created!", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Error! Try Again");
  }
};

export const travelAgencyRegister = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      companyName,
      streetAddress,
      city,
      province,
      postalCode,
      introduction,
      // firstName,
      // lastName,
      name,
      email,
      phone,
      password,
    } = req.body;

    if (!companyName)
      return res.status(400).send("Company Name Name is required");
    if (!streetAddress)
      return res.status(400).send("Street Address is required");
    if (!city) return res.status(400).send("City is required");
    if (!province) return res.status(400).send("Province is required");
    if (!postalCode) return res.status(400).send("Postal Code is required");
    if (!introduction) return res.status(400).send("Introduction is required");
    if (!name) return res.status(400).send("Name is required");
    // if (!firstName) return res.status(400).send("First Name is required");
    // if (!lastName) return res.status(400).send("Last Name is required");
    if (!email) return res.status(400).send("Email is required");
    if (!phone) return res.status(400).send("Phone Number is required");
    if (!password || password.length < 6)
      return res
        .status(400)
        .send("Password is required and should be minimum 6 characters long");

    let userExist = await TravelAgency.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    //register
    const user = new TravelAgency(req.body);

    await user.save();
    console.log("User Created!", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Error! Try Again");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    let user = await User.findOne({ email }).exec();
    // console.log("USER EXISTS", user);
    if (!user) return res.status(400).send("User with that email not found.");
    //
    // compare password
    user.comparePassword(password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERR", err);
      if (!match || err) return res.status(400).send("WRONG PASSWORD");
      // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("SIGN IN FAILED");
  }
};

export const travelAgencyLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    let user = await TravelAgency.findOne({ email }).exec();
    // console.log("USER EXISTS", user);
    if (!user) return res.status(400).send("User with that email not found.");
    //
    // compare password
    user.comparePassword(password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERR", err);
      if (!match || err) return res.status(400).send("WRONG PASSWORD");
      // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          companyName: user.companyName,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("SIGN IN FAILED");
  }
};

export const agencyProfileDetails = async (req, res) => {
  console.log("Yes here I am");
};
