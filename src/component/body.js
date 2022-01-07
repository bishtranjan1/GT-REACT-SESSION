import React, { Component } from "react";
import Article from "./article";
class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = { place: "alwar" };
		console.log("Body Constructor");
	}
	componentWillUnmount() {
		console.log("Body componentWillUnmount");
	}
	componentDidMount() {
		console.log("Body componentDidMount");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Body componentDidUpdate");
	}
	clickHandler = (ev) => {
		this.setState({ place: ev.target.value });
	};
	render() {
		console.log("Body  render");
		return (
			<div>
				<input
					type="text"
					onChange={this.clickHandler}
					value={this.state.place}
				></input>
				<div>This is body {this.props.clientName}</div>
				<Article place={this.state.place} name={this.props.clientName} />
			</div>
		);
	}
}

export default Body;
