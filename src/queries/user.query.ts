import DB from "../models";
const { User } = DB;

export const createUser = async (email: string, fullname: string) => {
  return await User.create({
    email,
    fullname,
  });
};

export const getUser = async (query = {}) => {
  return await User.findOne(query);
};

export default { createUser };
