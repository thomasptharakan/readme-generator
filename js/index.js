const inq = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';

//import generateMarkDown Module
const generateMarkdown = require("./generateMarkdown");

//Declare Licence Array for selection and badges
const licenseChoice = {
  'The MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'IBM Public License Version 1.0': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Eclipse Public License 1.0': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
}
//Declare additonal Badges choice list
const badgeChoice = {
  'VsCode': '[![made-for-VSCode](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)](https://code.visualstudio.com/)',
  'Node JS': '[![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)',
  'NPM': '[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://nodejs.org/en/)',
  'JavaScript': '[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)',
  'HTML5': '[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)',
  'CSS3': '[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)'
}

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is your git user id ?',
    name: 'userID',
  },
  {
    type: 'input',
    message: 'What is your git repo-name?',
    name: 'repositoryName',
  },
  {
    type: 'input',
    message: 'What is your email Id?',
    name: 'emailID',
  },
  {
    type: 'input',
    message: 'What is The title of your project ?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Provide a Description of the project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the dependency installation steps ?',
    name: 'installationSteps',
    default: 'npm install'
  },
  {
    type: 'input',
    message: 'Provide the steps to use the application.',
    name: 'usage',
    default: 'node index.js'
  },
  {
    type: 'list',
    message: 'Select a License ?',
    name: 'license',
    choices: Object.keys(licenseChoice),
  },
  {
    type: 'input',
    message: 'Provide Contributor Steps',
    name: 'contributorSteps',
    default: 'Email-Admin'
  },
  {
    type: 'input',
    message: 'Provide Testing Steps',
    name: 'testingSteps',
    default: 'npm test'
  },
  {
    type: 'checkbox',
    message: 'Select any additional badges you would like to include',
    name: 'badges',
    choices: Object.keys(badgeChoice)
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`../export/${fileName}`, data, (err) => err ? console.error(err) : console.log('Created File!'));
}

// function to initialize program
function init() {

  //Request Data from user
  inq
    .prompt(questions).then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));

      //Generate Readme Markdown
      let readme = generateMarkdown(answers,licenseChoice,badgeChoice);
      // Write to file
      writeToFile(fileName, readme);
    });


}

// function call to initialize program
init();

