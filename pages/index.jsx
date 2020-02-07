import React from 'react';
import Heading from '../components/Heading';
import GenericLayout from '../layouts/Generic';

class Home extends React.Component {
    render() {
        return (
            <GenericLayout>
                <Heading value="It Works!"/>
            </GenericLayout>
        );
    }
}

export default Home;
