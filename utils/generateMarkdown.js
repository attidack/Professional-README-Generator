// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {
    return ''
  }
  return `
  ![LicenseBadge](https://img.shields.io/github/license/${data.github}/${data.title})
  `;
}

// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.license) {
    return ''
  }
  return `
  - [License](#license)`;
}

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


function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Live Link
  ${data.link}

  ## Screenshot
  ![Screenshot](/assets/imgs/screenshot.png)

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) ${renderLicenseLink(data)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

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
   or reach me by [Email](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
