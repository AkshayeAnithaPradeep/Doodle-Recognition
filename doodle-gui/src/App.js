import React, { Component } from 'react';
import './App.css';
import Paint from './Paint';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  let ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  console.log(ia);

  return new Blob([ia], {type:mimeString});
}


class App extends Component {
  state = {
    data: null,
    refresh: false,
    answerReady: false
  };

  componentDidMount() {
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI() {
    return new Promise((resolve, reject) => {
      let canvas= document.getElementById("draw");
      let dataURL = canvas.toDataURL('image/png');
      let blob = dataURItoBlob(dataURL);
      let xhr = new XMLHttpRequest();
      let loc = window.location;
      xhr.open('POST', `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`, true);
      xhr.onerror = function() {reject(xhr.responseText);}
      xhr.onload = function(e) {
        if (this.readyState === 4) {
          let response = JSON.parse(e.target.responseText);
          resolve(`Result = ${response['result']}`);
        }
      };

      let fileData = new FormData();
      fileData.append('file', blob);
      xhr.send(fileData);
    })
  };

  clear() {
    let canvas= document.getElementById("draw");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight-70);
  }
  handleClose = () => {
    this.setState({ answerReady: false });
  };

  predict() {
    this.setState({loading: true});
    this.callBackendAPI()
        .then(res => {
          this.setState({ data: res, answerReady: true, loading: false })
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="App">
          <Dialog
              open={this.state.answerReady}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Prediction"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.data}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <AppAppBar clear={this.clear.bind(this)}/>
          <Paint canvas={this.state.canvas} ctx={this.state.ctx}/>
          {this.state.loading? <LinearProgress/>: ''}
          <AppFooter predict={this.predict.bind(this)}/>
        </div>
    );
  }
}

export default App;
