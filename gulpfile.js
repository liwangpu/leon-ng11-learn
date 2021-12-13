const { src, dest, series } = require("gulp");
const fs = require('fs');
const del = require("del");
const path = require('path');
const faker = require('faker');
const rename = require('gulp-rename');
// const concat = require('gulp-concat');
const fsExtra = require('fs-extra');
const concat = require('concat');

const componentUserDir = 'D://Leon/AppCode/angular/ng 11/zorror';

async function concatElementFiles(cb) {
    const files = [
        './dist/my-components/runtime.js',
        './dist/my-components/polyfills.js',
        './dist/my-components/main.js',
    ];
    await fsExtra.ensureDir('elements');
    await concat(files, 'elements/my-components.js');
    await fsExtra.copyFile('./dist/my-components/styles.css', 'elements/my-components.css');
    cb();
}

async function copyElementToUsingProject(cb) {
    // await del.sync([`${componentUserDir}/elements/**`], { force: true });
    src(`elements/**`)
        .pipe(dest(`${componentUserDir}/elements`)).on('end', () => {
            console.log('element copy finished');
            cb();
        });
}

exports.concatenate = series(concatElementFiles);
// exports.copyElementToUsingProject = series(copyElementToUsingProject);

