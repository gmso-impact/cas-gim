// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cas-gim/" : "/",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
};
