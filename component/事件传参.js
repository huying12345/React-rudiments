
class LoggingButton extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Hello world."
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(name, e){ //事件对象e要放在最后
        e = window.event || e;
        e.preventDefault();
        console.log('this name:', name); //Hello world.
    }

    render() {
        return (
            <div>
                <p>This is test function super</p>
                {/*通过 bind 传参*/}
                <a href="https://reactjs.org" onClick={this.handleClick.bind(this, this.state.name)} target="_blank">React</a>
            </div>
        );
    }
}

ReactDOM.render(<LoggingButton />, document.getElementById("app"))
