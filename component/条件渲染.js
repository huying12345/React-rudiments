
class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : props.isLoggedIn
        }
        this.showGreeting = this.showGreeting.bind(this)
    }
    showGreeting() {
        if (this.state.isLoggedIn) {
            return this.UserGreeting();
        }
        return this.GuestGreeting();
    }
    UserGreeting() {
        return <h1>欢迎回来!</h1>;
    }
    GuestGreeting() {
        return <h1>请先注册。</h1>;
    }
    render(){
        return(
            <div>
                {this.showGreeting()}
            </div>
        )
    }
}

let isLoggedIn = false;

ReactDOM.render(
    <Greeting isLoggedIn={isLoggedIn}/>,
    document.getElementById('app')
);
