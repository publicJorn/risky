module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/theme.scss";
        `,
      },
    },
  },
}
