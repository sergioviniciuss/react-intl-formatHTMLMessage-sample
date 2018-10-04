import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedHTMLMessage } from 'react-intl';
import logo from './logo.svg';
import './App.css';


const messages = defineMessages({
  htmlTest: {
    id: 'app.htmlTest',
    defaultMessage:'<b>Foo</b> bar'
  }
});

class App extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {intl.formatHTMLMessage(messages.htmlTest)}
          </p>
          <p>
           <FormattedHTMLMessage
            id="app.test2"
            defaultMessage="<b>Foo</b> bar 2"
          />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default injectIntl(App);
