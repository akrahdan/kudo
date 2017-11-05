// prod.js - production keys here!!
module.exports = {
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookSecret: process.env.FACEBOOK_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,

  redirectDomain: process.env.REDIRECT_DOMAIN
};
