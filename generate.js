#!/usr/bin/env node

const fs = require('fs')
const ask = require('inquirer')
const utils = require('./utils')
const winston = require('winston')

// user current directory from where they are calling generate
const CURRENT_DIR = process.cwd()

const QUESTIONS = [
  {
    name: 'projectName',
    type: 'input',
    message: 'What would you like to name this project?:',
    validate(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
      return 'Project name may only include letters, numbers, underscores and hashes.'
    },
  },
]

ask.prompt(QUESTIONS)
  .then((answers) => {
    const { projectName } = answers
    const templatePath = `${__dirname}/templates`

    fs.mkdirSync(`${CURRENT_DIR}/${projectName}`)
    utils.createDirectoryContents(CURRENT_DIR, templatePath, projectName);
  })
  .catch(error => winston.log('error', 'Error occured in ask.prompt', { message: error.toString() }))
