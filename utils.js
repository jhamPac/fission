const fs = require('fs')

/**
 * Copies contents from template directory to user root
 * @param {string} currentDirectory - path to where user is calling this generator
 * @param {string} templatePath - path to templates
 * @param {string} name - directory name from user input
 * @returns {void} - does not return anything just copies over contents
 */
const createDirectoryContents = (currentDirectory, templatePath, name) => {
  const files = fs.readdirSync(templatePath)

  files.forEach((file) => {
    const originalPath = `${templatePath}/${file}`
    const stats = fs.statSync(originalPath)

    if (stats.isFile()) {
      const contents = fs.readFileSync(originalPath, 'utf8')
      const writePath = `${currentDirectory}/${name}/${file}`

      // rename gitignore
      if (file === '.npmignore') file = '.gitignore'

      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDirectory}/${name}/${file}`)
      createDirectoryContents(currentDirectory, `${templatePath}/${file}`, `${name}/${file}`)
    }
  })
}

module.exports = {
  createDirectoryContents,
}
