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
                {/* <p>{bioUp}</p>
                <p>{bioMid}</p>
                <p>{bioBot}</p> */}
              </div>

              <div className="columns download">
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
    );
  }
}

export default About;
