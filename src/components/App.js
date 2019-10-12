import React, { Component } from "react";
import Projects from '../components/Projects';
import SocialProfiles from '../components/SocialProfiles';
import profile from '../assets/0D2FFDE0-A360-4229-BE80-D35483ACB24D.png'
import Title from '../components/Title';
class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div className="background">
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Courtney Revada-Luz.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        <Title />
        {this.state.displayBio ? (
          <div>
            <p>I live in Burbank, and I code every day.</p>
            <p>
              My favorite coding language is JavaScript, and I think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love the gym and music!</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
