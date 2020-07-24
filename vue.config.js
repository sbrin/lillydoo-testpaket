module.exports = {
  pluginOptions: {
    i18n: {
      locale: "de",
      fallbackLocale: "de",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_fonts.sass"
          @import "@/assets/sass/_variables.sass"
          `
      }
    }
  }
};
