import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const cuser = await User.findOne({ email: email });

    if (cuser) {
      res.status(400).json({
        Request: "Fail",
        error: "User Already Exists",
      });
    }

    const nuser = new User({
      name: name,
      email: email,
      password: password,
    });

    const salt = await bcrypt.genSalt(10);
    nuser.password = await bcrypt.hash(password, salt);
    await nuser.save();

    const user = {
      name: nuser.name,
      token: jwt.sign({ id: nuser._id }, "Randome", { expiresIn: "2d" }),
    };

    console.log(nuser);

    res.status(200).json({
      Request: "Success",
      payload: user,
    });
  } catch (error) {
    res.status(500).json({
      Request: "Fail",
      error: "Internal Server Error",
    });
  }
};



export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const cuser = await User.findOne({ email: email });


    if (!cuser) {
      res.status(404).json({
        Request: "Fail",
        error: "User Not Found",
      });

      console.log(cuser)

      const isMatch = await bcrypt.compare(password, cuser.password);

      if (!isMatch) {
        res.status(401).json({
          Request: "Fail",
          error: "Invalid Creds",
        });
      }

      const user = {
        name: cuser.name,
        token: jwt.sign({ id: cuser._id }, "Randome", { expiresIn: "2d" }),
      };

      res.status(200).json({
        Request: "Success",
        payload: user,
      });
    }
  } catch (error) {
    res.status(200).json({
      Request: "Fail",
      error: "Internal Server Error",
    });
  }
};
