import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Houda',
      bio: 'A  developer',
      imgSrc: 'https://media.istockphoto.com/id/546763388/fr/photo/le-point-de-vue-parfait.jpg?s=170667a&w=0&k=20&c=rG9LPeWfLJrAuafjVlL7WfAXMkEjoQshFgrxzA9ypE8=',
      profession: 'Software Engineer',
    },
    show: false,
    time: 0,
  };

  componentDidMount() {
 setInterval(() => { this.setState(
        (p) => ({ time: p.time + 1 }));
    }, 1000);
  }

  Profile = () => {
    this.setState((State) => ({
      show: !State.show,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.Profile}>Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
          </div>
        )}
        <p>Time : {this.state.time} seconds</p>
      </div>
    );
  }
}

export default App;