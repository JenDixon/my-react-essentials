var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var TreeNode = React.createClass({
	getInitialState: function() {
		return {
			visible: true
		};
	},
	render: function() {
		var childNodes;
		var classObj;

		if(this.props.node.childNodes != null) {
			childNodes = this.props.node.childNodes.map(function(node, index) {
				return <li key={index}><TreeNode node={node} /></li>
			});

			classObj = {
				togglable: true,
				"togglable-down": this.state.visible,
				"togglable-up": !this.state.visible
			};
		}

		var style;
		if(!this.state.visible) {
			style = {display: "none"};
		}

		return (
			<div>
				<h5 onClick = {this.toggle} className={classNames(classObj)}>
					{this.props.node.title}
				</h5>
				<ul style={style}>
					{childNodes}
				</ul>
			</div>
		);
	},
	toggle: function() {
		this.setState({visible: !this.state.visible});
	}
});

var tree = {
	title: "howdy",
	childNodes: [
		{title: "child1"},
		{title: "child2", childNodes: [
			{title: "fish", childNodes: [
				{title: "bowl"}
			]},
			{title: "family tree"}
		]}
	]
};


ReactDOM.render(
	<TreeNode node={tree} />,
	document.getElementById("react-application")
);




// var ReactClass = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			isHidden: false
// 		};
// 	},

// 	handleClick: function() {
// 		this.setState({
// 			isHeaderHidden: !this.state.isHeaderHidden
// 		}); 
// 	},

// 	render: function() {
// 		var title = 'Stateful React Component'
// 		var headerElement = React.createElement('h1', {
// 			className: 'header', 
// 			key: 'header'
// 		}, title);

// 		var buttonElement = React.createElement('button', 
// 			{
// 				className: 'btn btn-default', 
// 				onClick: this.handleClick, 
// 				key: 'button'
// 			}, 'Toggle Header');

// 		if(this.state.isHeaderHidden) {
// 			return React.createElement('div', null, [buttonElement]);
// 		}

// 		return React.createElement('div', null, [buttonElement, headerElement]);
// 	}

// });

// var reactComponentElement = React.createElement(ReactClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));