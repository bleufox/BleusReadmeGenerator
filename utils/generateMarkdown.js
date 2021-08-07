// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  * The following steps are required to run the program:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Instructions
  * Instructions for use are as follows:
  ${data.instructions}

  ## Usage
  * Example of how to use the program:
  ${data.usageInformation}

  ## Contributing
  * Guidelines for contributing to the project:
  ${data.contributionGuidelines}

  ## Tests
  * Instructions regarding testing the program:
  \`\`\`
  ${data.testInstructions}
  \`\`\`

  ## Questions
  GitHub: https://github.com/${data.githubUsername}
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
