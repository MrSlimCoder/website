import PropTypes from 'prop-types';
import React from 'react';
import '../scss/main.scss';

class GenericLayout extends React.Component {
    static get propTypes() {
        return {children: PropTypes.node.isRequired};
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default GenericLayout;
