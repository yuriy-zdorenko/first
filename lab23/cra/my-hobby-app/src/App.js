import React from "react";

// Class Component
class HobbyInfoClass extends React.Component {
  render() {
    return (
      <div>
        <h2>My Hobby: Walking</h2>
        <p>
          I love Walking, especially along quiet and green streets. It's a great
          way to relax and escape some new places in my city.
        </p>
      </div>
    );
  }
}

// Functional Component
function HobbyInfoFunc() {
  return (
    <div>
      <h2>My Hobby: Walking</h2>
      <p>
        I love Walking, especially along quiet and green streets. It's a great
        way to relax and escape some new places in my city.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HobbyInfoClass />
      <HobbyInfoFunc />
    </div>
  );
}

export default App;
