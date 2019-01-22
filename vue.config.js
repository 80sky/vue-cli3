module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    host: "172.19.10.231",
    port: 8088,
    proxy: null
  }
};
