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
    return '![License: Apache](https://img.shields.io/badge/License-Apache-blue)(https://opensource.org/license/apache)'
  }
  if (license === "ISC") {
    return '![License: Apache](https://img.shields.io/badge/License-ICS-yellow)(https://opensource.org/license/isc)'
  }
  if (license === "MIT") {
    return '![License: Apache](https://img.shields.io/badge/License-MIT-green)(https://opensource.org/license/mit)'
  }
  if (license === "No Lincese") {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText;
  if (license != "No License"){
    licenseText = "This project is licensed under the ${selectLicense(license).fullName}; A copy of the license can be found at: ${selectLicense(license).link}"
  }
  else {
    licenseText = "Not Licensed";
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;