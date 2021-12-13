const { src, dest, series } = require("gulp");
const fs = require('fs');
const del = require("del");
const path = require('path');
const faker = require('faker');
const rename = require('gulp-rename');
// const concat = require('gulp-concat');
const fsExtra = require('fs-extra');
const concat = require('concat');

async function concatElementFiles(cb) {
    const files = [
        './dist/my-components/runtime.js',
        './dist/my-components/polyfills.js',
        './dist/my-components/main.js',
    ];
    await fsExtra.ensureDir('src/assets/elements');
    await concat(files, 'src/assets/elements/my-components.js');
    await fsExtra.copyFile('./dist/my-components/styles.css', 'src/assets/elements/my-components.css');
    const templateJs = fs.readFileSync('amd-module-template.js', 'utf8');
    const componentJs = fs.readFileSync('src/assets/elements/my-components.js', 'utf8');
    const dyComponentJs = templateJs.replace('//registry-place-holder', componentJs);
    fs.writeFileSync('src/assets/elements/dynamic-components.js', dyComponentJs, 'utf8');
    cb();
}


exports.concatenate = series(concatElementFiles);

