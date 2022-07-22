const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter your github repository name (use dash instead of spaces)(Case Sensitive)(Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your GitHub repository!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your E-mail!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter  a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter a Live Link to the project (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('Please enter a Live Link to the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions for the project (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter installation instructions for the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Enter usage information for the project (Required)',
        validate: useageInput => {
          if (useageInput) {
            return true;
          } else {
            console.log('Please enter usage information for the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution information for the project (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter contribution information for the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test information for the project (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter test information for the project');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you have selected for this project? (Check all that apply)',
        choices: ['MIT License', 'Apache License v3.0', 'GNU General Public License v3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'Boost Software License', 'Creative Commons Zero v1.0 Universeal', 'Eclipse Public License v2.0', 'GNU affero General Public License v3.0', 'GNU general Public license v2.0', 'GNU Lesser General Public License v2.1']
      }
];
// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})