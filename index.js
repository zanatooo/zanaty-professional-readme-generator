const inquirer = require ('inquirer')
const fs = require('fs')
function start () {
    inquirer.prompt([
        {
            type: "input",
            name:"title",
            message:"project title"
        },
        {
            type: "input",
            name: "description",
            message:"project description"
        },
        {
            type: "input",
            name:"installation",
            message:"project installation"
        },
        {
            type: "input",
            name:"usage",
            message:"project usage requirments"
        },
        {
            type: "list",
            name:"license",
            message:"project lisence",
            choices: ['MIT','ISC','APPACHE2.0','GPL','NONE']
        },
        {
            type: "input",
            name:"contribution",
            message:"project contributor"
        },
        {
            type: "input",
            name:"test",
            message:"project testing requirements"
        },
        {
            type: "input",
            name:"email",
            message:"project emialing"
        },
        {
            type: "input",
            name:"github",
            message:"github profile"
        }
   
    ]).then (function(response){
    let readmeContent=`
# Title:${response.title}
## Description: ${response.description}
### Table of Content:
* [license](#license)
* [instatllation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [testing](#testing)
* [github](#github)
* [email](#email)

#### License:
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

#### Installation:
${response.installation}

#### Usage:
${response.usage}

#### Conribution:
${response.contribution}

#### Github:
[github profile](https://github.com/${response.github})

#### Email
<${response.email}

`
    fs.writeFileSync('OUTPUT.md',readmeContent,function(error){
        if(error)throw error
    })
console.log('Good work today')
    })
}
start()