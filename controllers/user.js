import {User} from '../models/user.js';


export const registerUser = async (req, res) => {
  try {
    // Logic to register a user
    res.json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.json({
      error: "Failed to register user",
    });
  }
};



export const loginUser = async (req, res) => {
try {
  const {email, password} = req.body;
  const findUser = await User.findOne({email:email});

  const comparePassword = bcrypt.compare{password, findUser.password};
} catch (error) {
  
}
}