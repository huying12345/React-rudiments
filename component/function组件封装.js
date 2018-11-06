function HelloMsg(props) {
    return <div>
        <h1>Hello React!</h1>
        <h2>现在是{props.date ? props.date.toLocaleTimeString() : "00:00:00"}</h2>
    </div>
}
//
// setInterval(() => {
//     const element = <HelloMsg date={new Date()}/>;
//     ReactDOM.render(
//         element,
//         document.getElementById("app")
//     )
// }, 1000)



