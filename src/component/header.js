import React, { Component } from "react";
class Header extends Component {
	render() {
		return (
			<nav className="nav">
				<a className="nav-link active" href="#">
					Active
				</a>
				<a className="nav-link" href="#">
					Link
				</a>
				<a className="nav-link" href="#">
					Link
				</a>
				<a className="nav-link disabled" href="#">
					Disabled
				</a>
				GT-React-App {this.props.headerName}
			</nav>
		);
	}
}

export default Header;
