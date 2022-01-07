// import React, { Component } from "react";
// class Article extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Article is from = {this.props.place} by {this.props.name}
// 			</div>
// 		);
// 	}
// }

// export default Article;

const Article = (props) => {
	return (
		<div>
			Article is from = {props.place} by {props.name}
		</div>
	);
};

export default Article;
