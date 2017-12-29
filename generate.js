const fs = require('fs')
const chalk = require('chalk')
const ask = require('inquirer')

const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'What would you like to name this project?:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
      else return 'Project name may only include letters, numbers, underscores and hashes.'
    }
  }
]

ask.prompt(QUESTIONS)
  .then((answers) => console.log(answers))
  .catch((error) => console.log(error))
