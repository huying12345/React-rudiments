
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    // 在渲染前调用,在客户端也在服务端。
    componentWillMount(){

    }
    //只在客户端，之后已经生产DOM结构
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
    componentWillReceiveProps(){

    }
    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。
    shouldComponentUpdate(){
        return true
    }
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(){

    }
    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate(){

    }
    //在组件从 DOM 中移除之前立刻被调用
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
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


