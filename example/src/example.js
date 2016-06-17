var React = require('react');
var ReactDOM = require('react-dom');
var ReactSignature = require('react-signature');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactSignature />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
