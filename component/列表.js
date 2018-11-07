
const numbers = ['a','b','c','d','e','f'];
class ListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list: props.list
        }
        this.listItem = this.listItem.bind(this)
    }
    listItem(value, index){
        //key 的正确使用
        return <li key={index} id={index}>{value}</li>
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.list && this.state.list.length > 0 ?
                        this.state.list.map((item,index) => this.listItem(item,index))
                        : "无数据"}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<ListDemo list={numbers}/>, document.getElementById("app"))










