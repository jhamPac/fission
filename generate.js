const fs = require('fs')
const chalk = require('chalk')
const ask = require('inquirer')
const utils = require('./utils')

// user current directory from where they are calling generate
const CURRENT_DIR = process.cwd()

const QUESTIONS = [
  {
    name: 'projectName',
    type: 'input',
    message: 'What would you like to name this project?:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
      else return 'Project name may only include letters, numbers, underscores and hashes.'
    }
  }
]

ask.prompt(QUESTIONS)
  .then((answers) => {
    let { projectName } = answers
    let templatePath = `${__dirname}/templates`

    fs.mkdirSync(`${CURRENT_DIR}/${projectName}`)
    utils.createDirectoryContents(CURRENT_DIR, templatePath, projectName);

  })
  .catch((error) => console.log(error))
