import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // secure cookie in prod
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    })
    .json({
      success: true,
      message,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token, // optional, if you also want to send it in body
    });
};