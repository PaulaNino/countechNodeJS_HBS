module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ]
};


