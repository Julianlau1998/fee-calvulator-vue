module.exports = {
  pwa: {
    name: 'Libria',
    themeColor: '#000809',
    msTileColor: '#000809',
    backgroundColor: '#000809',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    }
  },
}
  