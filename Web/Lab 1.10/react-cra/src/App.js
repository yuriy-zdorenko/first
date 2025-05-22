import React, { Component } from 'react';

class HobbyClassComponent extends Component {
  render() {
    return <h2>Моє хобі — програмування.</h2>;
  }
}

function HobbyFunctionComponent() {
  return <h2>Моє хобі — велоспорт. Люблю кататись у вихідні.</h2>;
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <HobbyClassComponent />
      <HobbyFunctionComponent />
    </div>
  );
}

export default App;