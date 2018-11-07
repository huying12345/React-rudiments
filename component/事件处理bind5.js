
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true
        }
    }
    //直接使用箭头函数 => this指向固定
    handleClick = () => {
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
