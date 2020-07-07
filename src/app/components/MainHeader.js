import React, { Component } from 'react';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTurnPage = (pathname) => {
    const {
      history,
    } = this.props;

    history.push({ pathname });
  }

  render() { 
    return (
      <div className="container mainHeader">
        <div className="row">
          <div onClick={() => {this.handleTurnPage("/");}} className="cursorPointer col-xs-4 text-center">Home</div>
          <div onClick={() => {this.handleTurnPage("/article/");}} className="cursorPointer col-xs-4 text-center">SSR</div>
          <div onClick={() => {this.handleTurnPage("/about");}} className="cursorPointer col-xs-4 text-center">About</div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
