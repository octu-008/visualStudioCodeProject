module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins':[
    [
      'component',
      {
        "libarayName": 'element-ui',
        "styleLibraryName": 'theme-chalk'
      }
    ]
  ]
}
