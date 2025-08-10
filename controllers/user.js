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
