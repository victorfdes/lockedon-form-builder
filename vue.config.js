module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lockedon-form-builder/'
    : '/',
  outputDir: 'docs'
}
