const i = 0;
const liDom = [
    <li>篮球</li>,
    <li>足球</li>,
    <li>排球</li>,
    <li>橄榄球</li>
]
ReactDOM.render(
    <div>
        <h1>菜鸟教程</h1>
        <h2>欢迎学习 React</h2>
        <h3>也可以在JSX中加入{}表示JavaScript表达式比如：{3+4}</h3>
        {i === 0 ? <h4>这是i=0</h4> : <h4>这是i !=0</h4>} {/*JSX语法中不能使用if else判断语句，可以使用三元运算符代替比如：*/}
        <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
        <ol>
            {liDom} {/*JSX语法会自动展开所有数组数据*/}
        </ol>
    </div>,
    document.getElementById("app")
)






