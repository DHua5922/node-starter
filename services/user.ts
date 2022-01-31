import User from "../models/User";

export const getUserById = (id: string) => {
  return User.findById(id);
};

export const getUser = (queries: any) => {
  return User.findOne(queries);
};
