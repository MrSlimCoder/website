import GenericLayout from "../layouts/Generic";
import Heading from "../components/Heading";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    static getInitialProps({ query: { username } }) {
        return { username };
    }

    render() {
        return (
            <GenericLayout>
                <Heading value={this.props.username} />
            </GenericLayout>
        );
    }
}

export default Profile;
