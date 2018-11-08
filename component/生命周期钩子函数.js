class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    //渲染前调用
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    //第一次渲染之后调用
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    //在组件接收到一个新的 prop (更新后)时被调用，这个方法在初始化render时不会被调用
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    // 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    //组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    // 在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    // 在组件从 DOM 中移除之前立刻被调用。
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('app')
);
