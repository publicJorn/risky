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
      'styled-components', {
        ssr: true
      },
    ],
  ]
}
