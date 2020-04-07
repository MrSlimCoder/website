import GenericLayout from "../layouts/Generic";
import Heading from "../components/Heading";

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GenericLayout>
				<Heading value="Mock About" />
			</GenericLayout>
		);
	}
}

export default About;
