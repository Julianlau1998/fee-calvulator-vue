const lang = navigator.languag
module.exports = {
    pwa: {
      name: lang === 'de-DE' ? 'Paypal Gebührenrechner' : 'Fee Calculator For Paypal Fees',
      themeColor: '#000809',
      msTileColor: '#000809',
      backgroundColor: '#000809',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
    },
    workboxPluginMode: 'InjectManifest',
     workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  }
  