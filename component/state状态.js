class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.tick();
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tick(){
        this.timer = setInterval(() => this.setState({date: new Date()}), 1000)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById("app"))


