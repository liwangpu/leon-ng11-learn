const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/my-components/runtime.js',
        './dist/my-components/polyfills.js',
        // './dist/my-components/scripts.js',
        './dist/my-components/main.js',
    ];
    await fs.ensureDir('elements');

    await concat(files, 'elements/my-components.js');
    await fs.copyFile('./dist/my-components/styles.css', 'elements/styles.css');
    // await concat(files, 'elements/analytics-counter.js');
    // await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css');
    // await fs.copy('./dist/angular-elements/assets/', 'elements/assets/');
})();