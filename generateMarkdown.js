// function- generate markdown for README
function generateMarkdown(data) {

  let mdTitle = `# `;
  let mdDescription = `## Description`;
  let mdTableofContents = `### Table of Contents`;
  let mdUsage = `### Usage`;
  let mdInstallation = `### Installations`;
  let mdContributing = `### Contributing`;
  let mdTesting = `### Testing`;
  let mdLicense = `### License`;
  let mdQuestions = `## Questions`;
  let licenseBadge = `![License](https://img.shields.io/badge/License-None-red)`;


  let markdownContent ="";

  //Title
  if (data.title !== '') { mdTitle += data.title};

  //License Badge
  if (data.license !== '') {
    let lbURI = encodeURI(`https://img.shields.io/badge/License-` + data.license + `-green`);
    licenseBadge =  `![License](` + lbURI + `)`; 
  }

//Description
  if (data.description !== '') { mdDescription +=  "\n\n" + " - " + data.description};
 
 //Table of Contents
  if (data.installations !== '') { mdTableofContents += `
  * [Installations](#installations)` };
  if (data.usage !== '') { mdTableofContents += `
  * [Usage](#usage)` };
  if (data.contributing !== '') { mdTableofContents += `
  * [Contributing](#contributing)` };
  if (data.testing !== '') { mdTableofContents += `
  * [Testing](#testing)` };

//Installations
  if (data.installations !== '') { mdInstallation += "\n\n" + " ` " + data.installations + " ` " };

  //Usage
  if (data.usage !== '') { mdUsage += "\n\n" + " ` " + data.usage + " ` "};

  //Contributing
  if (data.contributing !== '') { mdContributing +="\n\n" + " - " + data.contributing};

  //Testing
  if (data.testing !== '') { mdTesting += "\n\n" + " - " + data.testing};

  //License
  if (data.license !== '') { mdLicense += "\n\n" + " - " + data.license};

  //GitHub username
  if (data.username !== '') { mdQuestions += "\n\n" + " * " + "GitHub- " + "github.com/" + data.username};

  //email address
  if (data.email !== '') { mdQuestions += "\n\n" + " * " + "Email me at- " + data.email + " with additional questions"};

 
  markdownContent += 
                    mdTitle + "\n\n\n" + 
                    licenseBadge + "\n\n\n" + 
                    mdDescription + "\n\n" + 
                    mdTableofContents +"\n\n" + 
                    mdInstallation +"\n\n" +
                    mdUsage +"\n\n" +
                    mdContributing +"\n\n" +
                    mdTesting +"\n\n" +
                    mdLicense +"\n\n" +
                    mdQuestions +"\n\n";;
                    

  return markdownContent;  

;}


module.exports = generateMarkdown;
