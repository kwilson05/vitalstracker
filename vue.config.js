// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("style")
      .test(/\.scss$/)
      .use("sass")
      .loader("sass-loader")
      .end();
    return config;
  },
};
