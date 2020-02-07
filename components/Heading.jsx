import PropTypes from 'prop-types';
import React from 'react';

class Heading extends React.Component {
    static get propTypes() {
        return {value: PropTypes.string.isRequired};
    }

    render() {
        return <h1>{this.props.value}</h1>;
    }
}

export default Heading;
