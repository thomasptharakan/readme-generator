const inq = require('inquirer');
const fs = require('fs');

const licenseChoice = {
    'The MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPL v3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'IBM Public License Version 1.0':'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    'Mozilla Public License 2.0':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Eclipse Public License 1.0':'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
}

inq
.prompt([
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
        default:'npm install'
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
        choices : Object.keys(licenseChoice),
      },
      {
        type: 'input',
        message: 'Provide Contributor Steps',
        name: 'contributorSteps',
        default : 'Email-Admin'
      },
      {
        type: 'input',
        message: 'Provide Testing Steps',
        name: 'testingSteps',
        default: 'npm test'
      },
  ]) .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    generateBaseFile(answers);
  });


  function generateBaseFile(answers){

    //Create Table of contents
    const toc = '## Table of Contents\n'+
    '- [Installation](#installation)\n' +
    '- [Usage](#usage)\n'+
    '- [Contributing](#contributing)\n'+
    '- [Tests](#tests)\n'+
    '- [License](#license)\n'+
    '- [Questions](#questions)\n';

    //Declare readme variable and initialise with titie
    let readme = `# ${answers.title}\n`;
    // Add Licence Badge
    readme += `${licenseChoice[answers.license]}\n`;
    //Add Description Section
    readme += `## Description\n ${answers.description}\n`;
    //Add Table of Conteents
    readme += toc;
    //Add installation steps
    readme +=  `## Installation\n `
    //Add Steps for cloning repo
    readme += `Clone the repository\n`
    readme += `\`\`\`\n`;
    //Build Repo URL from in userid and repository name
    readme += `https://github.com/${answers.userID}/${answers.repositoryName}\n`;
    readme += `\`\`\`\n`;
    readme += `To install necessary dependencies\n`;
    readme += `\`\`\`\n`;
    readme += `${answers.installationSteps}\n`
    readme += `\`\`\`\n`;
    //Add Usage Section
    readme +=  `## Usage\n`;
    readme += answers.usage + '\n';
    //Adding Licensing section
    readme += `## License\n`;
    readme += `This project is licensed under the ${answers.license}\n`
    //Adding Contributor Section
    readme += `## Contributing\n`;
    //Generate default block for Repository Contributors
    if (answers.contributorSteps === 'Email-Admin'){
        readme += `Please email admin at ${answers.emailID} for any updates you would like to include.\n`;
    }else{
        readme += `${answers.contributorSteps}\n`;
    }
    //Add Tests Section
    readme += `## Tests\n`;
    readme += `To run tests, run the following command\n`;
    readme += `\`\`\`\n`;
    readme += `${answers.testingSteps}\n`
    readme += `\`\`\`\n`;
    //Add questions Section
    readme += `## Questions:\n`;
    readme += `If you have any questions about the repo, or would like to open an issue, please contact admin directly at ${answers.emailID}.`
    readme += `You can find more of my work at https://github.com/${answers.userID}\n`

    // Write to file 
    fs.writeFile('../export/README.md',  readme,(err) => err ? console.error(err) : console.log('Added Title!'));
  }
