import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;

      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="skills">
        <br />
        <div className="container text-center">
          <h2 className="section-title">My Skills</h2>
          <br />
          <p>{skillmessage}</p>

          <div className="row">
            <div className="four columns experience-topics">
              {/* <i className="fa fa-laptop"></i>
              <br /> */}
              <h3>Front-end</h3>
              <ul className="mr-5">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Bootstrap4</li>
                <li>Javascript</li>
                {/* <li>Ajax</li> */}
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="four columns experience-topics">
              {/* <i className="fa fa-server"></i>
              <br /> */}
              <h3>Back-end</h3>
              <ul className="mr-5">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="four columns experience-topics">
              {/* <i className="fa fa-wrench"></i>
              <br /> */}
              <h3>Tools</h3>
              <ul className="mr-5">
                <li>GIt & Github</li>
                <li>NPM</li>
                <li>Webpack</li>
                <li>Gulp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
