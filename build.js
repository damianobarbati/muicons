const console = require('better-console');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { upperFirst, camelCase } = require('lodash');
const glob = require('glob');

execSync('rm -rf MaterialDesign', { stdio: [0, 1, 2] });
execSync('rm -rf ./src/*', { stdio: [0, 1, 2] });

execSync('git clone git@github.com:Templarian/MaterialDesign.git --depth 1', { stdio: [0,1,2] });

const files = glob.sync('./MaterialDesign/icons/svg/*.svg');

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

//clean up previous if any
execSync('rm -f ./src/*.js', { stdio: [0,1,2] });

let indexJSContent = '';

for (const { name, attribute, value } of icons) {
    const iconJSContent =
`import React from 'react';
export default props => (
    <svg viewBox={'0 0 24 24'} {...props}>
        <path ${attribute}={'${value}'} />
    </svg>
);`;

    indexJSContent += `export ${name} from './${name}.js';\n`;
    fs.writeFileSync(`./src/${name}.js`, iconJSContent);
}

fs.writeFileSync('./src/index.js', indexJSContent);

execSync('rm -rf MaterialDesign', { stdio: [0, 1, 2] });