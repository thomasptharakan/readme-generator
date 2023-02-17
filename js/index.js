const inq = require('inquirer');
const fs = require('fs');

const licenseChoice = {
    'MIT':'1',
    'GNU':'2'
}

inq
.prompt([
    {
        type: 'input',
        message: 'What is your user id ?',
        name: 'userID',
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
        message: 'What are the installation steps  ?',
        name: 'installationSteps',
        default:'Clone the repository'
      },
      {
        type: 'list',
        message: 'Select a License ?',
        name: 'License',
        choices : Object.keys(licenseChoice),
      },
      {
        type: 'editor',
        message: 'Provide Contributor Steps',
        name: 'contributorSteps',
      },
      {
        type: 'input',
        message: 'Provide Testing Steps',
        name: 'testingSteps',
      },
  ]) .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    // fs.writeFile('./../export/READE.md',JSON.stringify(answers, null, '  ') , (err) => 
    generateBaseFile(answers);
  });


  function generateBaseFile(answers){
    const toc = '## Table of Contents\n'+
    '- [Installation](#installation)\n' +
    '- [Usage](#usage)\n'+
    '- [Contributing](#contributing)\n'+
    '- [Tests](#tests)\n'+
    '- [License](#license)\n'+
    '- [Questions](#questions)\n';

    let readme = `# ${answers.title}\n`;
    readme += `# Description\n ${answers.description}\n`;
    readme += toc;
    readme +=  `## Installation\n `
    readme += `Clone the repository\n`
    readme += `\`\`\``;
    readme += `\`\`\``;
    readme += `To install necessary dependencies\n`;
    readme == `${answers.installationSteps}\n`;
    readme +=  `## Usage :\n`;
    readme += `## Contributing:\n`;
    readme += `## Tests:\n`;
    readme += `## License:\n`;
    readme += `## Questions:\n`;

    fs.writeFile('../export/README.md',  readme,(err) => err ? console.error(err) : console.log('Added Title!'));
  }
