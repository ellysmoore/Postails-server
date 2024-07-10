import dotenv from "dotenv";
dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTHO_SECRET,
  baseURL: process.env.AUTHO_BASE_URL,
  clientID: process.env.AUTHO_CLIENT_ID,
  issuerBaseURL: process.env.AUTHO_CLIENT_URL,
};

export default config;
