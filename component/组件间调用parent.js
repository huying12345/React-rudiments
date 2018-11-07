
import Child from './child'

class Parent extends React.Component{
    render(){
        return(
           <Child childName="胡英" />
        )
    }
}
ReactDOM.render(<Parent />, document.getElementById("app"))
