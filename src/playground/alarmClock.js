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
// get Alarm object.hours() get minutes() if hours && minutes === currentTimeObj{}.hours() && minutes
// Multiple alarms: if alarm1, else if alarm2 etc run alarmclock and pass in the currentAlarm
// First use variables to set the time, later instance of an object day, hour, minutes, seconds to set current Alarm
// Alarm is alertView later it will be a sound
// If everything works use a form to set the alarm(s)

/*
#Plan
* Clock
* 1 alarm object
* alarm 1 object alarm1 obj hours and minutes
* if alarm === current time alart
* set multiple alarms
* play sound
* connect spotify (first spotify if connection also give it default sounds!! )
* simple interface to set alarm
* sleepcycle, calculate wake up time on timeToBed and Sleepcycle 1,5 uur, 40 min to sleep etc. 
* keep statistics
* if fysieke alarmclock hifiberry, pi etc, movement sensors (test!! doplar radar, this way it's verry sensitive
and will give more data?! just test!! )
    * turn on main light!! 
    * turn on central heating
    * give information, agenda, weather and other information
        * speech, lcd screen



Other: fall asleep sounds, light. Turn light off with alarmclock, goToSleepbtn fysiek light, temp turn off screen,  
*/

ReactDOM.render(<Clock />, document.getElementById('app'));