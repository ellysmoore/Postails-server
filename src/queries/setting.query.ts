import DB from "../models";
const { Setting } = DB;

export const getSettings = async () => {
  return Setting.findOne();
};
