const fs = require('fs')

const createDirectoryContents = (currentDirectory, templatePath, name) => {
  const files = fs.readdirSync(templatePath)

  files.forEach((file) => {
    const originalPath = `${templatePath}/${file}`
    const stats = fs.statSync(originalPath)

    if (stats.isFile()) {
      const contents = fs.readFileSync(originalPath, 'utf8')
      const writePath = `${currentDirectory}/${name}/${file}`
      fs.writeFileSync(writePath, contents, 'utf8')
    }
  })
}

module.exports = {
  createDirectoryContents
}
