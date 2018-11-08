
class Content extends React.Component{
    render(){
        return <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <h4>{this.props.myDataProp}</h4>
            </div>;
    }
}

class HelloMsg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: "Hello React!"
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    submit(){
        if(!this.state.value){
            alert("请输入内容！")
        }else{
            alert("提交成功！")
            this.setState({value: ''})
        }
    }
    render(){
        let value = this.state.value;
        return <div>
            <Content myDataProp={value}
                     updateStateProp={this.handleChange}/>
            <button onClick={this.submit}>Submit</button>
        </div>
    }
}
ReactDOM.render(
    <HelloMsg />,
    document.getElementById('app')
);













