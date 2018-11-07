
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true
        }
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}
ReactDOM.render(<Toggle />, document.getElementById("app"))
