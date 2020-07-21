import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataList from './ImageList';

class Home extends React.Component {
    constructor(props) {
        super(props);
      }
    
  render() {
    return (
      <DataList />
    );
  }
}

Home.propTypes = {
};

export default connect(null, null)(Home);
