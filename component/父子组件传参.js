
class Website extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: "菜鸟教程",
            site: "https://www.runoob.com"
        }
    }

    render(){
        return(
            <div>
                {/*接受父组件的name和site参数，并传递给子组件*/}
                <Name name={this.state.name}/>
                <Link site={this.state.site}/>
            </div>
        )
    }
}

class Name extends React.Component{
    render(){
        return (
            //通过props接收父组件传的name
            <h1>{this.props.name}</h1>
        )
    }
}
class Link extends React.Component{
    render(){
        return (
            //通过props接收父组件传的site
            <a href={this.props.site}>
                {this.props.site}
            </a>
        )
    }
}

ReactDOM.render(<Website />, document.getElementById("app"))
