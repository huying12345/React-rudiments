
class GetData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }
    render(){
        return(
           <div>
               {this.state.data && this.state.data.length ?
                   <span>{this.state.data}</span>
               :
                    <span>没有数据...</span>
               }
           </div>
        )
    }
}
const data = "Hello React！";
ReactDOM.render(<GetData data={data}/>, document.getElementById("app"))
