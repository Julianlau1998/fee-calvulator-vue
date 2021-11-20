module.exports = {
    pwa: {
      name: 'Fee Calculator For Paypal Fees',
      themeColor: '#000809',
      msTileColor: '#000809',
      backgroundColor: '#000809',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
      workboxOptions: {
        swSrc: 'src/service-worker.js',
        exclude: [/\.map$/, /_redirects/],
      }
    }
  }
  