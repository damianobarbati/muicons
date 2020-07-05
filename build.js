const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { upperFirst, camelCase } = require('lodash');
const glob = require('glob');

execSync('rm -rf MaterialDesign ./src/*', { stdio: [0, 1, 2] });
execSync('git clone git@github.com:Templarian/MaterialDesign.git --depth 1', { stdio: [0,1,2] });

const files = glob.sync('./MaterialDesign/svg/*.svg');

const icons = files.map(file => {
    const name = upperFirst(camelCase(path.basename(file, '.svg')));
    const matches = fs.readFileSync(file).toString().match(/\s(?<attribute>d)="(?<value>.+?)"/);

    try {
        const { attribute, value } = matches.groups;
        return { name, attribute, value };
    }
    catch (error) {
        console.error(`${file} (${name}) skipped`);
        return null;
    }
}).filter(value => value);

// let indexJSContent = '';
let showCaseHTMLContent = '';

for (const { name, attribute, value } of icons) {
    const iconJSContent =
`import React from 'react';

export default (props = {}) => (
    <svg viewBox={'0 0 24 24'} {...props}>
        <path ${attribute}={'${value}'} />
    </svg>
);`;

    // indexJSContent += `export { default as ${name} } from './${name}.js';\n`;
    fs.writeFileSync(`./src/${name}.js`, iconJSContent);

    showCaseHTMLContent += `
<div>
    <svg viewBox="0 0 24 24">
        <path ${attribute}="${value}" />
    </svg>
    <span>${name}</span>
</div>
    `
}

showCaseHTMLContent = `
<html>
<head>
<style>
body {
    margin: 15px 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-row-gap: 30px;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
div {
    width: 100%;
    text-align: center;
}
svg {
    width: 40px;
    fill: #444
}
span {
    display: block;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px;
    font-family: Verdana;
}
</style>
</head>
<body>${showCaseHTMLContent}</body>
</html>`;

fs.writeFileSync('./showcase.html', showCaseHTMLContent);

execSync('rm -rf MaterialDesign', { stdio: [0, 1, 2] });
