// Test Page - http://segotn13423/dev/formsRemediation/SitePages/app.aspx
const URL = {
  dev: {
    siteUrl: "http://localhost:3000"
  },
  production: {
    siteUrl: "http://segotn13423/dev/formsRemediation/"
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
    username: "cs-ws-s-sph-svc-test",
    password: "&&KM7IH-7a97%b&",
    domain: "vcn"
  },
  qa: {
    username: "cs-ws-s-sph-svc-qa",
    password: "7J8--H99-&cH9fK"
  },
  test: {
    username: "cs-ws-s-sph-svc-test",
    password: "&&KM7IH-7a97%b&"
  }
};

const targetPath = "/SiteAssets/app/"; 

module.exports = {
  URL,
  credentials,
  targetPath
};
