const inq = require('inquirer');
const fs = require('fs');

inq
.prompt([
    {
        type: 'input',
        message: 'What is your user id ?',
        name: 'userID'
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
      },
      {
        type: 'input',
        message: 'Select a License ?',
        name: 'License',
      },
      {
        type: 'input',
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
    fs.writeFile('../export/README.md', `Title : ${answers.title}\n`,(err) => err ? console.error(err) : console.log('Success!'));
    fs.appendFile('../export/README.md', `Description : ${answers.description}\n`,(err) => err ? console.error(err) : console.log('Success!'));   
    fs.appendFile('../export/README.md', `Installation : ${answers.installationSteps}\n`,(err) => err ? console.error(err) : console.log('Success!'));    
    fs.appendFile('../export/README.md', `Usage :\n`,(err) => err ? console.error(err) : console.log('Success!'));    
    fs.appendFile('../export/README.md', `Contributing:\n`,(err) => err ? console.error(err) : console.log('Success!'));     
    fs.appendFile('../export/README.md', `Tests:\n`,(err) => err ? console.error(err) : console.log('Success!'));    
    fs.appendFile('../export/README.md', `Questions:\n`,(err) => err ? console.error(err) : console.log('Success!'));   
  });


  
