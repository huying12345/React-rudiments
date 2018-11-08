
class RefsDemo extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let e = this.refs.demo2;
            console.log(e)
    }
    render(){
        return(
            <div>
                <input type="text" ref="demo1" value="你好"/>
                <div ref="demo2"><h1>demo2</h1></div>
                <p ref="demo3">demo3</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
ReactDOM.render(<RefsDemo/>, document.getElementById("app"))


