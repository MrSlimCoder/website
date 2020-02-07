import React from 'react';
import Heading from '../components/Heading';
import GenericLayout from '../layouts/Generic';

class Landing extends React.Component {
    render() {
        return (
            <GenericLayout>
                <Heading value="Landing / Not Logged In"/>
            </GenericLayout>
        );
    }
}

export default Landing;
