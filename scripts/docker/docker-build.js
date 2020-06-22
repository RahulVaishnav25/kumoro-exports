const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'kumoro-exports-angular';

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

