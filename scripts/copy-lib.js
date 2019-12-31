
const fs = require('fs-extra');
const path = require('path');



const origin =  path.resolve('./src/lib');
console.log(origin);

fs.copySync(origin,path.resolve('./out/amd/lib'));
fs.copySync(origin,path.resolve('./out/esm/lib'));