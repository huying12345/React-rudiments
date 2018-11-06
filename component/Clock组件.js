class Clock extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello React!</h1>
                <h2>现在是：{this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

let tick = () => {
    ReactDOM.render(
        // element
        <Clock date={new Date()} />,
        document.getElementById("app")
    )
}
// setInterval(tick, 1000)

