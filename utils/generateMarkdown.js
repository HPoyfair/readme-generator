// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`; //creates a license badge image
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `\n* [License](#license)`; //clickable link to the license section
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { //adds a license section if theres a license
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Find me on GitHub: [${data.github}](https://github.com/${data.github})

For additional questions, reach me via email at: ${data.email}

`;
}

export default generateMarkdown; // allows index.js to import it
