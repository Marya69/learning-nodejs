// npm init -y a to create package.json
//npm i namepackage to install package


// esta ema packege lodbash ka bakar denen bo rekxstanawae arrayakam


const _ = require('lodash');
const items = [1,[2,[3,[4]]]];  
const newItems = _.flattenDeep(items);
console.log(newItems);