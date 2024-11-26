#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const downloadGitRepo = require('download-git-repo');
const { inquirerPrompt } = require('./inquirer');
const { copyFile, checkMkdirExists } = require('./copy');
yargs.command(
    ['create', 'c'],
    '新建一个模板',
    function(yargs) {
        return yargs.option('name', {
            alias: 'n',
            demand: true,
            describe: '模板名称',
            type: 'string'
        });
    },
    function(argv) {
        inquirerPrompt(argv).then(answers => {
            console.log(answers);
            const { name, template } = answers;
            // 获取目标文件夹
            const dest = path.join(process.cwd(), name);
            console.log(dest);
            const auth = {
                username: '1411818691@qq.com',
                password: 'yangshi521.' // 或者使用 'token': 'yourAccessToken'
            };
            // 下载模版
            downloadGitRepo(template, dest, function(err) {
                if (err) {
                    console.error('Error cloning repo:', err);
                } else {
                    console.log('Repo cloned successfully!');
                }
            });
            // const isMkdirExists = checkMkdirExists(path.resolve(process.cwd(), `./src/pages/${name}/index.js`));
            // if (isMkdirExists) {
            //     console.log(`${name}/index.js文件已经存在`);
            // } else {
            //     try {
            //         copyFile(
            //             path.resolve(__dirname, `./template/${chain}/index.js`),
            //             path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
            //             {
            //                 name
            //             }
            //         );
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        });
    }
).argv;
