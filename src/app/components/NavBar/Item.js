import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTurnPage = () => {
    const {
      history,
      code,
      currentCode,
    } = this.props;

    if (currentCode !== code) { history.push({ pathname: `/article/${code}` }); }
  }

  render() { 
    const { 
      code,
      text,
      currentCode,
    } = this.props;
    return (
      <li className={(currentCode === code) ? "selected" : "" } onClick={this.handleTurnPage}><a>{text}</a></li>
    );
  }
}

export default Item;
