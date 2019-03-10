import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  getCurrentPot,
  sendNameToServer,
  sendPitchInToServer,
  sendGetOneToServer
} from './socket';
import { getAName } from './usernames';
import SnackBarNotif from './SnackBarNorif';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const name = getAName();

    getCurrentPot(dispatch);
    dispatch({type: 'ASSIGNED_USERNAME', name });
    sendNameToServer(name);
  };

  render() {
    return (
      <div>I'm ready for changes</div>
    );
  }
}

export default App;
