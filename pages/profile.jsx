import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../components/Heading';
import GenericLayout from '../layouts/Generic';

class Profile extends React.Component {
    static getInitialProps({query: {username}}) {
        return {username};
    }

    static get propTypes() {
        return {username: PropTypes.string.isRequired};
    }

    render() {
        return (
            <GenericLayout>
                <Heading value={this.props.username}/>
            </GenericLayout>
        );
    }
}

export default Profile;
