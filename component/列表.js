
const numbers = ['a','b','c','d','e','f'];
function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>
}
class ListDemo extends React.Component{
    constructor(props){
        super(props);
    }
    listItem = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ListItem key={number.toString()}
                  value={number}/>
    )
    render(){
        return(
            <div>
                <ol>
                    {this.listItem}
                </ol>
            </div>
        )
    }
}

ReactDOM.render(<ListDemo/>, document.getElementById("app"))










