//Components
//Welcome Banner
class WelcomeBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="welcome">
        <span>Welcome</span>
      </div>
    );
  }
}

//Greeting Words
class Greetings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="greetingInfo">
        <h1>Christopher E </h1>
        <h2>Cybersecurity Engineer / Security Analyst</h2>
        <h2>OSCP (Jun. 2020), CySA+ (expected Sept. 2020)</h2>
      </div>
    );
  }
}

//Buttons and links
class ReferenceLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="refLinks">
        <a href="https://www.linkedin.com/in/christopher-e/" target="_blank"><i className="fab fa-linkedin" ></i></a>
        <a href="https://github.com/e-chris" target="_blank"><i className="fab fa-github-square"></i></a>
        <a href="#resumeSection">Learn More</a>
      </div>
    );
  }
}

//Logo and profile picture
class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="logoImage">
        <div id="imageSize">
          <img id="portfolioImg" src="images/filterImage.png" />
          <img id="portfolioBackdrop" src="images/backdrop.png" />
        </div>
      </div>
    );
  }
}

//Banner
class BannerDeco extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="banner" id="greetingBanner"></div>;
  }
}

//Resume Deco
class RoundDeco extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="roundDeco" />;
  }
}
//Resume Component
class ResumeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <RoundDeco />
        <ul>
          <li></li>
        </ul>
      </section>
    );
  }
}
//Resume Section
class ResumeSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
// main render
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="react">
        <section id="greetingSection">
          <div id="greetingContent">
            <WelcomeBanner />
            <div id="greetings">
                <div id="greets">
                    <Greetings />
                    <ReferenceLinks />
                </div>
                <Logo />
            </div>
          </div>
          <BannerDeco />
        </section>

        <section id="resumeSection">
          <BannerDeco />
          <ResumeSection />
        </section>
      </div>
    );
  }
}

let node = document.getElementById("content");
ReactDOM.render(<App />, node);
