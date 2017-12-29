const fs = require('fs')

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
  createDirectoryContents
}
