import React from 'react';


class App extends React.Component {
  
  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <a>My name is {this.props.name}.</a>
      </div>
    );
  }
}

export default App;
