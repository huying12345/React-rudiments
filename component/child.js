
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.childName
        }
        this.child = this.child.bind(this);
    }
    child(){
        return `This is : ${this.state.name}`
    }

    render(){
        return(
            <div>
                <h1>{this.child()}</h1>
            </div>
        )
    }
}

