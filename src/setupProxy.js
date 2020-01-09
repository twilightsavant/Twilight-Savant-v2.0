const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
  app.use(
    "/api/form",
    proxy({
      target: "http://www.twilightsavant.com:3001",
      changeOrigin: false,
      //pathRewrite: {
      //  "^api/form": "api/form"
      //}
    })
  );

  app.use(morgan('combined'));
};
