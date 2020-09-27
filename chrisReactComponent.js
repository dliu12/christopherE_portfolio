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
        <h2>OSCP (Jun. 2020)</h2>
        <h2>CySA+ (Sept. 2020)</h2>
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
        <a id="linkedIn" href="https://www.linkedin.com/in/christopher-e/" target="_blank"><i className="fab fa-linkedin" ></i></a>
        <a  id="gitHub" href="https://github.com/e-chris" target="_blank"><i className="fab fa-github-square"></i></a>
        <a id="scrollButton" href="#resumeSection"><span>Learn More</span></a>
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
    return <div className="banner" id={this.props.idName}></div>;
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
        <h3 className="sectionTitle">{this.props.title}</h3>
        {this.props.sectionItem}
      </section>
    );
  }
}

class Education extends React.Component {
  constructor(props){
    super(props);
  }
  schools = {
    "fullStack":{
      name: "Fullstack Academy",
      year: "July, 2020"
    },
    "cooperUnion":{
      name:"The Cooper Union for the Advancement of Science and Art",
      year:"May,2019",
      description: "Bachelor of Engineering, Electrical Engineering – Electronic Systems and Materials Track"
    }
  } 
  render(){
    let renderArr = [];
    for(let items in this.schools){
      renderArr.push(
        <li key={items}>
            <span>{this.schools[items]["name"]}</span>
            <p>{this.schools[items]["year"]}</p>
            <p>{this.schools[items]["description"]}</p>
        </li>
      );
    }
    return(
      <ul>
        {renderArr}
      </ul>
    );
  }
}
class WorkExperience extends React.Component{
  constructor(props){
    super(props);
  }
  work_experience = {
    fullstackA:{
      position:"Cybersecurity Teaching Assisstant",
      company: "Fullstack Academy",
      year:"Jul. 2020 – Present",
      description:["Guide students in workshop exercises, including: PWK, SANS challenges, forensics, incidence case studies",
                  "Present lunchtime lectures about GitHub fundamentals and pentesting workflow",
                  "Provide academic mentoring to a team of 5 students via weekly study groups and review lessons"
                  ]
    },
    NYCDOT:{
      position:"Project Engineer",
      company:"NYC Department of Transportation, Movable Bridge",
      year:"Jun. 2019 – Feb. 2020",
      description:[" Researched and applied fire code compliance assessments to existing structures and proposed retrofits",
                  "Identified and mediated design conflicts by reviewing design submittals, visiting project sites, and interfacing directly with city agencies, project stakeholders, and consultants",
                  "Monitored $1.7 million budget and ensured adherence to contract schedule"
                  ]
    },
    ENPOWER:{
      position:"Energy Analyst and Field Intern",
      company:"EN-POWER GROUP",
      year:"Jun. 2018 – May 2019",
      description:["Worked alongside lead engineers to perform ASHRAE Level II Energy Audits and write comprehensive reports of over 25 multifamily and commercial buildings in the NYC metro area for Local Law 87 compliance",
                   "Developed framework to automate public database queries for retrieving property information; tested on a list of over 300 buildings and reduced task by 6 hours",
                   "Prototyped tool streamlining report filing process using U.S. Dept. of Energy’s Building Asset Score API"
                  ]
    },
    GraceChurchHS:{
      position:"Math and Science Consultant",
      company:"Grace Church High School",
      year:"Sept. 2016 – May 2019",
      description:["Tutored students in math, physics, and chemistry; acted as substitute teacher for classes up to 25 students"]
    }
    
  }
  render(){
    let renderArr = [];
    for(let items in this.work_experience){
      let descriptionArr =[];
      for(let i = 0, l = this.work_experience[items]["description"].length; i < l; i++){
        descriptionArr.push(
        <li key={Math.random()}>{this.work_experience[items]["description"][i]}</li>
        );
      }
      renderArr.push(
        <li key={items + (Math.random()*10)}>
          <span className="positionName">{this.work_experience[items]["position"]}</span>
          <p className="work_duration">{this.work_experience[items]["year"]}</p>
          <p className="companyName">{this.work_experience[items]["company"]}</p>
          <ul>
            {descriptionArr}
          </ul>
        </li>
      )
    }
    return(
      <ul>
        {renderArr}
      </ul>
    );
  }
}
class ResearchProject extends React.Component{
  constructor(props){
    super(props);
  }
  researchProjects={
    project1:{
      name:"Self-Propagating Computer Worm (Shellshock Vulnerability)",
      addInfo:"Written in Python 3",
      year:"Summer 2020",
      description:["Developed program architecture: host discovery; vulnerability scan/identification; payload injection/execution",
                  "Modular code structure enables integration with various payloads: proof-of-concept utilized botnet creation"]
    },
    project2:{
      name:"Lossless Transmission Protocol Over Unreliable Channel",
      addInfo:"ECE303, Communication Networks",
      year:"Spring 2018",
      description:["Designed a transport-layer protocol using Python which implements packet-checking for random bit errors packet loss, and packet duplication; sender and receiver work in coordination to ensure lossless transmission",
                  "Implemented TCP-fairness via throughput throttling– sender/receiver pairs evenly share bandwidth, on average"]
    },
    project3:{
      name:"Thermoelectrically Powered IP Camera Monitoring System",
      link:"http://pubs.geothermal-library.org/lib/grc/1033759.pdf",
      addInfo:"Hveragerði, Iceland",
      year:"Summer 2017",
      description:["Accomplished near-constant uptime of camera-router system without electrical grid access",
                  "Led team of 8; delegated responsibilities and scheduled meetings with advisor to track group progress",
                  "Contributed technical writing and figures to a Geothermal Resources Council"]
    }
  }
  render(){
    let renderArr = [];
    for(let items in this.researchProjects){
      let descriptionArr =[];
      for(let i = 0, l = this.researchProjects[items]["description"].length; i < l; i++){
        descriptionArr.push(
        <li key={Math.random()}>{this.researchProjects[items]["description"][i]}</li>
        );
      }

      if(this.researchProjects[items].hasOwnProperty("link")){
        renderArr.push(
        <li key={items}>
          <a href={this.researchProjects[items]["link"]}><strong>{this.researchProjects[items]["name"]}</strong></a>
          <p>{this.researchProjects[items]["addInfo"]}</p>
          <p>{this.researchProjects[items]["year"]}</p>
          <ul>
            {descriptionArr}
          </ul>
        </li>
        );
      }
      else{
        renderArr.push(
          <li key={items}>
          <strong>{this.researchProjects[items]["name"]}</strong>
          <p>{this.researchProjects[items]["addInfo"]}</p>
          <p>{this.researchProjects[items]["year"]}</p>
          <ul>
            {descriptionArr}
          </ul>
        </li>
        );
      }
    }
    return(
      <ul>
        {renderArr}
      </ul>
    );
  }
}
class LeadershipAct extends React.Component{
  constructor(props){
    super(props);
  }
  activity = {
    activity1:{
      name:"CMD+CTRL Cyber Range CTF",
      position:"First Place Team",
      year:"Jun. 2020",
      description:"(web app vulnerability testing)"
    },
    activity2:{
      name:"Fullstack Cyber Hackathon",
      position:"Second Place Team; Best Technical Report",
      year:"May 2020",
      description:"(pentesting, OSINT, pcap analysis, scripting challenges)"
    },
    activity3:{
      name:"Splunk",
      position:"Boss of the SOC: APT & Ransomware Scenarios; SANS Holiday Hack Challenge",
      year:"Jun. 2020",
      description:"(reconstruct simulated attacks via Cyber Kill Chain)"
    },
    activity4:{
      name:"Event Supervisor",
      position:"NYC East Regional Science Olympiad | Circuit Lab",
      year:"2019, 2020"
    },
    activity5:{
      name:"Captain",
      position:"Cooper Union Varsity Men’s Volleyball Team",
      year:"2017 – 2019"
    }
  }
  render(){
    let renderArr =[];
    //resume coding here
    return(
      <ul>
        {renderArr}
      </ul>
    );
  }
}
//Resume Section
class ResumeSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <ResumeComponent title="Education" sectionItem={<Education />}/>
      <ResumeComponent title="Work Experience" sectionItem={<WorkExperience />} />
      <ResumeComponent title="Research and Projects" sectionItem = {<ResearchProject />}/>
      <ResumeComponent title="Activities and Leaderships" sectionItem = {<LeadershipAct />}/>
    </div>
    );
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
                  <div id="container">
                    <Greetings />
                    <ReferenceLinks />
                  </div>
                </div>
                <Logo />
            </div>
          </div>
          <BannerDeco idName="greetingBanner"/>
        </section>
        <section id="resumeSection">
          <BannerDeco idName = "resumeBanner"/>
          <ResumeSection />
        </section>
      </div>
    );
  }
}

let node = document.getElementById("content");
ReactDOM.render(<App />, node);
