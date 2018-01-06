import React from 'react';
import ReactDom from 'react-dom';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
    }
  }

  render()
  {
    return (
      <main>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"));