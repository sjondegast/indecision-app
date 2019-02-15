class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const num = localStorage.getItem('count');
            const count = parseInt(num, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));            
            } 
        } catch (error) {
            console.log(error);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(e) {
        e.preventDefault();
        this.setState((state) => {
            return {count: state.count +=1}
        });
    }
    handleMinusOne(e) {
        e.preventDefault();
        this.setState((state) => {
            if (state.count > 0) {
                return {count: state.count -= 1}
            } else {
                alert('zero is the limit');
            }
        });
    }
    handleReset(e) {
        e.preventDefault();
        this.setState((state) => {
            return {count: 0}
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();