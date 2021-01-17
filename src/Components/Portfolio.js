import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>
                      <br />
                      {projects.categoryStart}
                      <br />
                      <br />
                      {projects.categoryEnd}
                    </p>
                  </div>
                </div>

                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>

            <div className="source-code">
              <a href={projects.source} target="_blank">
                {" "}
                <span>
                  &#128071;&#127995;<h3> Source Code</h3>
                </span>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            {/* <div
              id="portfolio-wrapper"
              className="bgrid-thirds  s-bgrid-halves cf"
            >
              {projects}
            </div> */}

            <div id="portfolio-wrapper" className="bgrid-halves cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
