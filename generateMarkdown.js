// function to generate markdown for README
function generateMarkdown(data) {
  // Generate Table of Contents
  let mdTitle = `# `;
  let mdDescription = `## Description`;
  let mdTableofContents = `### Table of Contents`;
  let mdUsage = `### Usage`;
  let mdInstallation = `### Installations`;
  let mdContributing = `### Contributing`;
  let mdTesting = `### Testing`;
  let mdLicense = `### License`;
  let mdQuestions = `## Questions`;

  console.log(data);
  let markdownContent ="";

  if (data.title !== '') { mdTitle += data.title};

  if (data.description !== '') { mdDescription +=  "\n\n" + " - " + data.description};
 
 
  if (data.installations !== '') { mdTableofContents += `
  * [Installations](#mdInstallations)` };
  if (data.usage !== '') { mdTableofContents += `
  * [Usage](#mdUsage)` };
  if (data.contributing !== '') { mdTableofContents += `
  * [Contributing](#mdContributing)` };
  if (data.testing !== '') { mdTableofContents += `
  * [Testing](#mdTesting)` };

  if (data.installations !== '') { mdInstallation +="\n\n" + " - " + data.installations};

  if (data.usage !== '') { mdUsage += "\n\n" + " - " + data.usage};

  if (data.contributing !== '') { mdContributing +="\n\n" + " - " + data.contributing};

  if (data.testing !== '') { mdTesting += "\n\n" + " - " + data.testing};

  if (data.license !== '') { mdLicense += "\n\n" + " - " + data.license};

  if (data.username !== '') { mdQuestions += "\n\n" + " * " + "GitHub- " +  data.username };

  if (data.email !== '') { mdQuestions += "\n\n" + " * " + "Email- " + data.email};

 
  markdownContent += 
                    mdTitle + "\n\n\n" + 
                    mdDescription + "\n\n" + 
                    mdTableofContents +"\n\n" + 
                    mdInstallation +"\n\n" +
                    mdUsage +"\n\n" +
                    mdTesting +"\n\n" +
                    mdQuestions +"\n\n";;
                    

  return markdownContent;


// console.log (markdownContent);


;}

module.exports = generateMarkdown;
