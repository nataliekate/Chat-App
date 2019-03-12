import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class SnackBarNotif extends React.Component {
  render() {
    const { snackBarIsOpen, name, closeSnackBar, mode } = this.props;
    return (
      <SnackBar
        open={snackBarIsOpen}
        onClose={closeSnackBar}
        autoHideDuration={1000}
        TransitionComponent={TransitionDown}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={
          <span id="message-id">
            {name} {mode === 'pitch' ? 'pitched in!!' : 'got one!!'}
          </span>
        }
      />
    );
  }
}

export default SnackBarNotif;