// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {
    return ''
  }
  return `
  ![LicenseBadge](https://img.shields.io/github/license/${data.github}/${data.title})
  `;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.license) {
    return ''
  }
  return `
  - [License](#license)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.license) {
    return ''
  }
  return `
  ## License

  ${data.license}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Live Link
  ${data.link}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(data)}
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.useage}

 
  ${renderLicenseSection(data)}

 
  ## Contributing
  ${data.contributing}

 
  ## Tests
  ${data.tests}

 
  ## Questions
  You can reach me with my [github profile](https://github.com/${data.github})
   or reach me by [Email](${data.email})


`;
}

module.exports = generateMarkdown;
