import GenericLayout from "../layouts/Generic";
import Heading from "../components/Heading";

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GenericLayout>
                <Heading value="Landing / Not Logged In" />
            </GenericLayout>
        );
    }
}

export default Landing;
