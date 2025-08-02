/*
*Info: 
*Modules allow us to split code into separate files and use them via import/export.
*For production, bundlers like Webpack, Parcel, Vite, or Rollup combine these into a single file.
*The module system does not work in old browsers — only in modern (updated) browsers.
*The module system is not a TypeScript feature. It is a JavaScript/browser feature. We use it 
 to indicate that our application should follow the modern module system.

** Setup:
* update 'module' property value 'commonjs' to 'es2015' and 'target' property value 'es6 in
  tsconfig.json file.
* import with .js extention the exported classes. 
* <script type="module" src="./output/module.js"></script>. need to tell, type="module" in 
  script tag. that's mean, we want to use module system telling the browser.

*TODO: for creats bundle of js file, need to use bundler like Webpack, Parcel, Vite, Rollup etc.
*/
import {player3} from "./classes/player3.js"

const masRafee = new player3("Masrafee", "Bangladesh", 40);
const saKib = new player3("Sakib", "Bangladesh", 30);

const arr4 : player3[] = []; 
arr4.push(masRafee); 
arr4.push(saKib);

for(const player of arr4){
     console.log(`Player info: Name:${player.name}, Coumtry:${player.country}, Age:${player.age}.`);
}// prints objects for...of