import GenericLayout from '../layouts/Generic'
import Heading from '../components/Heading'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GenericLayout>
                <Heading value="It Works!" />
            </GenericLayout>
        );
    }
}

export default Home;