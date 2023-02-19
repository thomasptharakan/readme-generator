// function to generate markdown for README
function generateMarkdown(answers,licenseChoice,badgeChoice) {
  //Create Table of contents
  const toc = '## Table of Contents\n' +
    '- [Installation](#installation)\n' +
    '- [Usage](#usage)\n' +
    '- [License](#license)\n' +
    '- [Contributing](#contributing)\n' +
    '- [Tests](#tests)\n' +
    '- [Questions](#questions)\n';

  //Declare readme variable and initialise with titie
  let readme = `# ${answers.title}\n`;
  // Add Licence Badge
  readme += `${licenseChoice[answers.license]}`;
  //Add Description Section
  readme += `\n## Description\n ${answers.description}\n`;
  //Add Table of Conteents
  readme += toc;
  //Add installation steps
  readme += `## Installation\n `
  //Add Steps for cloning repo
  readme += ` - Clone the repository\n`
  readme += `\`\`\`\n`;
  //Build Repo URL from in userid and repository name
  readme += `https://github.com/${answers.userID}/${answers.repositoryName}\n`;
  readme += `\`\`\`\n`;
  readme += ` - To install necessary dependencies\n`;
  readme += `\`\`\`\n`;
  readme += `${answers.installationSteps}\n`
  readme += `\`\`\`\n`;
  //Add Usage Section
  readme += `## Usage\n`;
  readme += `You can use this application by running\n`;
  readme += `\`\`\`\n`;
  readme += `${answers.usage}\n`;
  readme += `\`\`\`\n`;
  //Adding Licensing section
  readme += `## License\n`;
  readme += `This project is licensed under the ${answers.license}\n`
  //Adding Contributor Section
  readme += `## Contributing\n`;
  //Generate default block for Repository Contributors
  if (answers.contributorSteps === 'Email-Admin') {
    readme += `Please email admin at ${answers.emailID} for any fixes/changes you would like to include.\n`;
  } else {
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
  readme += `<br/>You can find more of my work at https://github.com/${answers.userID}\n`
  //Add addtional Badges
  readme += `<br/><br/><br/>\n`;
  readme += `#\n`;
  for (i in answers.badges) {
    readme += ` ${badgeChoice[answers.badges[i]]} `;
  }
  readme += `\n#\n`;
  return readme;
}
//export function Generate Markdown
module.exports = generateMarkdown;
