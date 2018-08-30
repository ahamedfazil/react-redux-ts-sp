const URL = {
  dev: {
    siteUrl: "http://localhost:3000"
  },
  production: {
    siteUrl: ""
  },
  qa: {
    siteUrl: ""
  },
  test: {
    siteUrl: ""
  }
};

const credentials = {
  production: {
    username: "",
    password: ""
  },
  qa: {
    username: "",
    password: ""
  },
  test: {
    username: "",
    password: ""
  }
};

const targetPath = "/SiteAssets/app/"; 

module.exports = {
  URL,
  credentials,
  targetPath
};
