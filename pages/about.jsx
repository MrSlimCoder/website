import React from 'react';
import Heading from '../components/Heading';
import GenericLayout from '../layouts/Generic';

class About extends React.Component {
    render() {
        return (
            <GenericLayout>
                <Heading value="Mock About"/>
            </GenericLayout>
        );
    }
}

export default About;
