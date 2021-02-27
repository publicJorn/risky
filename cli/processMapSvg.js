const { exec } = require('child_process')

const root = process.cwd()
const cfg = `${root}/cli/svgo.config.js`
const src = `${root}/src/assets/maps/testmap/map.svg`
const dest = `${root}/src/assets/maps/testmap/map.json`

exec(
  `svgo --config ${cfg} -i ${src} -o - | svgson --camelcase --pretty > ${dest}`,
  (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(error && error.message || stderr)
      return
    }

    console.log(`Processed ${dest}`)
    console.log('\n')
  }
)
