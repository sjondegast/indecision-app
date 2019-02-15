//h1 Visibility Toggle
//button "Show details" - if btn clicked text changes and a tekst apears.
//click handler to toggle boolean value 
// babel src/playground/visibility-toggle.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react --watch

let bool = false;
let paragraph;
let buttonState = "Show";

const toggleSwitch = () => {
    bool = bool ? false : true;
    if (bool) {
        console.log(bool);
        paragraph = <p>Hey. These are some details you now see!</p>;
        buttonState = "Hide";
        render();  
    } else {
        console.log("its falsy");
        paragraph = "";
        buttonState= "Show";
        render();
    }
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleSwitch}>{buttonState}</button>
            {paragraph}
        </div>    
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();