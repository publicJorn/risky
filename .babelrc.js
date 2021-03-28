module.exports = {
  presets: [
    'razzle/babel',
    [
      '@babel/preset-react', {
        runtime: 'automatic'
      }
    ]
  ],

  plugins: [
    [
      'babel-plugin-styled-components', {
        ssr: true
      },
    ],
  ]
}
