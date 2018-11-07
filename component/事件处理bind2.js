
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isToggleOn: true
        }
        //直接绑定在this上面
        this.handleClick = () => {
            console.log(this)
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }))
        }
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
