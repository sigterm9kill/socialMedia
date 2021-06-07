const baseUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:3000" :
    "https: //git.heroku.com/social-media-sean.git";

module.exports = baseUrl;