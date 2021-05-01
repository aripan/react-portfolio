import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profileImage = "images/" + this.props.data.image;
      var bioUp = this.props.data.bioUp;
      var bioMid = this.props.data.bioMid;
      var bioBot = this.props.data.bioBot;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <div id="bg-img">
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profileImage}
                alt="Profile picture"
              />
            </div>
            <div className="nine columns main-col">
              <div className="row">
                <div className="columns details">
                  <h2>About Me</h2>
                  <p>
                    {bioUp}
                    <br />
                    <br />
                    {bioMid}
                    <br />
                    <br />
                    {bioBot}
                  </p>
                </div>

                <div id="resume" className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" target="_blank">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="container text-center">
            {/* <h2 className="section-title">My Skills</h2> */}
            {/* <p className="experience-skill">Experience With</p>
            <br /> */}
            <div style={{ padding: "0 20%" }}>
              <hr />
              <h2 style={{ color: "#fff" }}>Experience With</h2>
              <hr />
            </div>

            <div className="row">
              <div className="four columns experience-topics">
                {/* <i className="fa fa-laptop"></i>
              <br /> */}
                <h3>Front-end</h3>
                <ul className="mr-5">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Context API</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div className="four columns experience-topics">
                {/* <i className="fa fa-server"></i>
              <br /> */}
                <h3>Back-end</h3>
                <ul className="mr-5">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>APIs (REST)</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  {/* <li>Python</li> */}
                </ul>
              </div>

              <div className="four columns experience-topics">
                {/* <i className="fa fa-wrench"></i>
              <br /> */}
                <h3>Tools</h3>
                <ul className="mr-5">
                  <li>Git & Github</li>
                  <li>NPM</li>
                  {/* <li>Webpack</li> */}
                  <li>Postman</li>
                  <li>VS-Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
