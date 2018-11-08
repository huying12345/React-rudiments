
class AjaxRequest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            lastGistUrl: '',
            fileDetail: ''
        }
    }
    componentDidMount(){
        this.serverRequest = $.get(this.props.source, function (result) {
            let lastGist = result[0];
            this.setState({
                userName: lastGist.owner.login,
                lastGistUrl: lastGist.html_url,
                fileDetail: lastGist.description
            })
        }.bind(this))
    }
    componentWillUnmount(){
        this.serverRequest.abort()
    }
    render() {
        return (
            <div>
                <b>{this.state.userName}</b> 用户最新的 Gist 共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a><br/>
                <span>Description: {this.state.fileDetail}</span>
            </div>
        );
    }
}

ReactDOM.render(
    <AjaxRequest source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('app')
);
