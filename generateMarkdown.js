// function to generate markdown for README
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

  if (data.title !== '') { mdTitle += data.title};

  if (data.license !== '') {
    let lbURI = encodeURI(`https://img.shields.io/badge/License-` + data.license + `-green`);
    licenseBadge =  `![License](` + lbURI + `)`; 
  }


  if (data.description !== '') { mdDescription +=  "\n\n" + " - " + data.description};
 
 
  if (data.installations !== '') { mdTableofContents += `
  * [Installations](#installations)` };
  if (data.usage !== '') { mdTableofContents += `
  * [Usage](#usage)` };
  if (data.contributing !== '') { mdTableofContents += `
  * [Contributing](#contributing)` };
  if (data.testing !== '') { mdTableofContents += `
  * [Testing](#testing)` };

  if (data.installations !== '') { mdInstallation += "\n\n" + " ` " + data.installations + " ` " };

  if (data.usage !== '') { mdUsage += "\n\n" + " ` " + data.usage + " ` "};

  if (data.contributing !== '') { mdContributing +="\n\n" + " - " + data.contributing};

  if (data.testing !== '') { mdTesting += "\n\n" + " - " + data.testing};

  if (data.license !== '') { mdLicense += "\n\n" + " - " + data.license};

  if (data.username !== '') { mdQuestions += "\n\n" + " * " + "GitHub- " + "github.com/" + data.username};

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
