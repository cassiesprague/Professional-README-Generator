// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Used the following link to help with these functions. Have not tested them out yet but will test when done and will change if they do not work.
// https://www.lambdatest.com/automation-testing-advisor/javascript/redwood-licenseInfo
// Used the following website to get a template for making badges and made my own based on the templates for the badge options I choose
// https://shields.io/badges
// Used the following website to find the specific licenses I have options for
// https://opensource.org
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '![License: Apache](https://img.shields.io/badge/license-Apache-blue.svg)'
  }
  if (license === "ISC") {
    return '![License: Apache](https://img.shields.io/badge/license-ICS-yellow.svg)'
  }
  if (license === "MIT") {
    return '![License: Apache](https://img.shields.io/badge/license-MIT-green.svg)'
  }
  if (license === "No License") {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No License") {
    return '- [License](#license)'
  }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText;
  if (license !== "No License"){
    licenseText = `## License \nThis project is licensed under the ${license} license.`
    return licenseText
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}
${data.motivation}

## Table of Contents

- [Installation](#installation)
- [Usage](usage)
- [Credits](credits)
${renderLicenseLink(data.license)}
- [Badges](badges)
- [Features](features)
- [Contributing](contributing)
- [Tests](tests)
- [Questions](questions)

## Installation
${data.installation}

## Usage
${data.usage}
${data.screenshot}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Badges
${data.badges}

## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions about this repository, feel free to contact me through the following link to GitHub or to my listed email. Thank you!
[${data.username}](https://github.com/${data.username})
${data.email}
`;
}

module.exports = generateMarkdown;