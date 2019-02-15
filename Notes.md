# General information
    * Wen you download a node project there will be no node modules folder or wen you delete it and need it back
    Run the following command in the terminal from the root folder: npm install or yarn install wen using yarn

#Live-server
    * Install life server: npm install -g live-server 
    Install the live-server globally
    * Put everything that needs to be served up by live server inside the public directory.
    * Run live-server by running the following command from the root folder in the terminal: live-server public

# babel
## Install Babel
    * Don't use Yarn it sucks big time!
    * Better to use Babel locally in every project, don't use -g this will install the package global/systemwide!!

    * Install Babel 
        * npm install --save-dev @babel/core @babel/cli @babel/preset-env
    * Install presets 
        * npm install --save-dev @babel/preset-env
        * npm install --save-dev @babel/preset-react


## Compile code from ~/src/app.js to ~/public/scripts/app.js folder 
To Compile from src/app.js to public/scripts/app.js run the following command example A or B below in the terminal from the root folder:
A - babel src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch
B - Inside of the package.json file add the following line inside the scripts object: 
    "babelCmd": "babel src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch"
    Ten run babelCmd from the root folder in the terminal: npm run babelCmd
    The command is run by npm and the name in this case is babelCmd but this can be any name you give it.
Make sure the preset names are correct, for example if you installed with npm @babel/presents-ent you need to specify this correctly in the path.
C - To switch the file you wish to compile just change the file and/or file path:
babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch 

# Scripts:
- Run: babel src/app.js --out-file=public/scripts/app.js  --presents=@babel/preset-env,@babel/preset-react --watch
- Run: babel src/playground/es6-let-const.js --out-file=public/scripts/app.js  --presents=@babel/preset-env,@babel/preset-react --watch
- Run: babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js  --presents=@babel/preset-env,@babel/preset-react --watch
Had problems to find presets, the path to the presets was wrong, if you look in the dependancies its clearly a different name/path, use @babel/preset-env, not @babel/env!

#JSX - Javascript XML - dynamic templates
    * JSX elements must be wrapt inside a wrapper like a div element to work
    var template = <div><h1>test2</h1><p>test3</p></div>;
    * Also make the document readable by wrapping the complete line after = inside of ();
    var template = (
    <div>
        <h1>test2</h1>
        <p>test3</p>
    </div>
    );   

# JSX expressions
    * To reference data inside the template instead of static content, you need to put the var inside of a expression {}.
    So for Example: <p>Test</p> becomes var test = "test"; and <p>{test}</p>
    * Inside of: <p>Location: {user.location}</p> you can only use expressions, so if you want to do a if statement you need to make a function. So for example if you need to check if a var is empty or not u can call the function and give it the name of the var. Then the function will run to check if it is empty or not, if so return 'unknown' else return the String in the var.

    - Some attributes like class are resurved, so class is className="className"

## Saving and loading option data
localStorage.setItem
localStorage.getItem
localStorage.removeItem

* Store a Javascript object inside a string
JSON.stringify({ age: 26} )
const json = JSON.stringify({ age: 26 })
console.log(json) will return "{ "age: ", "26" }"  
JSON.parse(json) - this will return the object and not a string
JSON.parse(json).age will return 26

##Setting up webpack with css, scss
* sources:
https://www.npmjs.com/package/css-loader
npm install --save-dev css-loader

https://www.npmjs.com/package/style-loader
npm install style-loader --save-dev


