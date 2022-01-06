const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/news-data", {
      target: "https://news-data-bidchadna.herokuapp.com",
      changeOrigin: true,
    })
  );
};
