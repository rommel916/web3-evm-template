const inquirer = require('inquirer');
const template = require('./template');

function inquirerPrompt(argv) {
    const { name } = argv;
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: '模板名称',
                    default: name,
                    validate: function(val) {
                        if (!/^[a-zA-Z]+$/.test(val)) {
                            return '模板名称只能含有英文';
                        }
                        if (!/^[A-Z]/.test(val)) {
                            return '模板名称首字母必须大写';
                        }
                        return true;
                    }
                },
                {
                    type: 'list',
                    message: '选择开发模版',
                    choices: template,
                    name: 'template'
                }
            ])
            .then(answers => {
                resolve(answers);
            })
            .catch(error => {
                reject(error);
            });
    });
}

exports.inquirerPrompt = inquirerPrompt;
