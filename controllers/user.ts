import User from "../models/User";
import { getUser } from "../services/user";

export const registerUser = async (req: any, res: any) => {
  try {
    const user = await getUser({ email: req.body.email });
    if (user) {
      res.status(400).send("User with that email already exists.");
    } else {
      await User.create(req.body);
      res.status(201).send("User has been registered.");
    }
  } catch (e: any) {
    res.status(500).send(e);
  }
};
