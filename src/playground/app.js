class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        return alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
        const subTitle = 'Put your life in the hands of a computer';
        const name = "Sjon";
        const age = 31;

        return (
            <div>
                <Header subTitle={subTitle}/>
                <User name={name} age={age}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );  
};

// provide default values, this can be used to set a default if no title is provided and otherwise the 
// props will give the title... let's say there is a user that is not registered? then say user, 
// otherwise the props will get the username, retrieve the first name and show that to the screen.
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should i do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        optionText={option} 
                        key={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault(); 
        // this prevents the default form submit, the default will refresh/reload the whole page
        
        const option = e.target.elements.option.value.trim(); 
        //e.target = form, grab elements of the form, get option and its value.
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return { error };
        // });
        // the code below works the same way as the lines above, the code below is the shorthand version
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} >
                    <input type='text' name='option' />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// stateless functional component - it's stateless unlike the class, it's a component but not class based.
// this works fine if there is no state required, like the header of just to show btn.
// you can use props to use a method form a class or other information, you don't have access to props.
// to use props, pass it into the User function and use props.name instead of this.props.name
// there faster then the classes, it loads faster so if you don't need classes use a function because there is no overhead
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));