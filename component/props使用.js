
function PropsAttr(props) {
    return <h1>Props属性：{props.name}</h1>
}

const ele = <PropsAttr name = "你好！"/>

//ES6 的写法
class PropsAttr2 extends React.Component{
    render(){
        return (
            <h1>Props属性：{this.props.name}</h1>
        )
    }
}

const str = "huwqewi"
//defaultProps 属性为组件类设置props默认值
PropsAttr2.defaultProps = {
    name: str,
}
PropsAttr2.propTypes={
    name: PropTypes.number.isRequired
}

const ele2 = <PropsAttr2 />
ReactDOM.render(ele2, document.getElementById("app"))






