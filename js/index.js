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
    // fs.writeFile('./../export/READE.md',JSON.stringify(answers, null, '  ') , (err) => 
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
    //Add Description Section
    readme += `# Description\n ${answers.description}\n`;
    //Add Table of Conteents
    readme += toc;
    //Add installation steps
    readme +=  `## Installation\n `
    //Add Steps for cloning repo
    readme += `Clone the repository\n`
    readme += `\`\`\``;
    //Build Repo URL from in userid and repository name
    readme += `https://github.com/${answers.userID}/${repositoryName}`;
    readme += `\`\`\``;
    readme += `To install necessary dependencies\n`;
    readme += `\`\`\``;
    readme += `${answers.installationSteps}\n`
    readme += `\`\`\``;
    //Add Usage Section
    readme +=  `## Usage\n`;
    readme += answers.usage + '\n';
    //Adding Licensing section
    readme += `## License:\n`;
    readme += `This project is licensed under the ${answers.license}:\n`
    //Adding Contributor Section
    readme += `## Contributing\n`;
    //Generate default block for Repository Contributors
    if (answers.contributorSteps === 'Email-Admin'){
        readme += `Please email admin at ${answers.emailid} for any updates you would like to include.\n`;
    }else{
        readme += `${answers.contributorSteps}\n`;
    }
    //Add Tests Section
    readme += `## Tests\n`;
    readme += `To run test,run the following command\n`;
    readme += `\`\`\``;
    readme += `${answers.testingSteps}\n`
    readme += `\`\`\``;
    //Add questions Section
    readme += `## Questions:\n`;
    readme += `if you have any questions about the repo, open an issue or contact admin directly at ${answers.emailid}.`
    readme += `You can find more of my work at https://github.com/${answers.userID}\n`
    fs.writeFile('../export/README.md',  readme,(err) => err ? console.error(err) : console.log('Added Title!'));
  }
