import logo from "./logo.svg";
import "./App.css";
import Body from "./component/body";
import Footer from "./component/footer";
import Header from "./component/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Header headerName="GroundTruth" />
			<Body clientName="Medhive" />
			<Footer />
		</div>
	);
}

export default App;
