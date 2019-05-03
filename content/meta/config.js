const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Writings and Thoughts", // <title>
  shortSiteTitle: "Thoughts are my own", // <title> ending for posts and pages
  siteDescription: "A personal blog for IamTylerD",
  siteUrl: "https://tylerdaniel.io",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Tyler Daniel",
  authorTwitterAccount: "tylerdaniel",
  // info
  infoTitle: "Tyler Daniel",
  infoTitleNote: "Coder and Dad Joker",
  // manifest.json
  manifestName: "Writings and Thoughts",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "admin@tylerdaniel.io",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/iamtylerd" },
    { name: "twitter", url: "https://twitter.com/tylerdaniel" }
  ]
};
