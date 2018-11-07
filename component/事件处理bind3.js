
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true
        }
    }
    handleClick(){
        console.log(this)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render(){
        return(
            //绑定this对象
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}
ReactDOM.render(<Toggle />, document.getElementById("app"))
