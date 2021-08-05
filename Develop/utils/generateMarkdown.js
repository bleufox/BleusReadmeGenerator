// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return ""
  }}

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

  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usageInformation)
  - [License] (#license)
  - [Contributing](#contributionGuidelines)
  - [Tests](#testInstructions)
  - [Questions](#questions)

  ##
  ${data.installation}
  \`\`\
  ${data.instructions}
  ${data.usageInformation}
  ${data.contributionGuidelines}
  ${data.description}
  ${data.description}
`;
}

module.exports = generateMarkdown;
