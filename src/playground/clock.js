class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick(),
            1000
        });
    }
    componentWillUnMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    getTimeOfDay() {
        let time = this.state.date.getHours();
        if (time >= 7 && time < 12) {
            return 'Morning'
        } else if (time >= 12 && time < 18) {
            return 'Aftrnoon'
        } else if (time >= 18 && time < 24) {
            return 'Evening'
        } else {
            return 'Night'
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome Sjon Good {this.getTimeOfDay()}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <h3>{this.state.date.toLocaleDateString()}</h3>
            </div>
        );
    }
}

// build Alarm, extends Clock - constructor: super tick? or get setState? 
// First use variables to set the time, later instance of an object day, hour, minutes, seconds to set current Alarm
// Alarm is alertView later it will be a sound
// If everything works use a form to set the alarm(s)

ReactDOM.render(<Clock />, document.getElementById('app'));