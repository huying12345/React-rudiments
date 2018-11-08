
class ComponentApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
        this.handleClick = this.handleClick.bind(this)
        // this.handleClick2 = this.handleClick2.bind(this)
    }
    handleClick(){
        this.setState(function (click) {
            return {clickCount: click.clickCount + 1}
        })
    }
    //不能使用箭头函数
    // handleClick2(){
    //     this.setState((state) => {
    //         return {clickCount: state.clickCount}
    //     })
    // }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>点我！</button>
                <h2>点击次数为：{this.state.clickCount}</h2>
            </div>
        )
    }
}
ReactDOM.render(<ComponentApi/>, document.getElementById("app"))
