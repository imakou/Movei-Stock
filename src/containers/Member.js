import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";
import MemberContent from "../components/Member/MemberContent";

class Member extends Component {
  render() {
    Vibrant.from(
      "https://image.tmdb.org/t/p/w1400_and_h450_face/kqoBtMmiycbbhGLXGkKhL8SdaWB.jpg"
    )
      .getSwatches()
      .then(palette => console.log(palette.DarkVibrant.getRgb()));
    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage:
              'url("https://image.tmdb.org/t/p/w1400_and_h450_face/kqoBtMmiycbbhGLXGkKhL8SdaWB.jpg")'
          }}
          className="MemberJumbotron d-flex align-items-end"
        >
          {/* <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(113, 8, 9, 0.8)" }}
          /> */}
          <div className="MemberJumbotronInfo w-100">
            <div className="container MovieDetailJumbotron">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <h1>Imakou</h1>
                    <div className="row MemberJumbotronDesc d-flex justify-content-start">
                      <div className="col-md-4 col-sm-12">
                        <h6>
                          <small>Member Type: Standard</small>
                        </h6>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <h6>
                          <small>Standard Member</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <MemberContent />
        </section>
      </React.Fragment>
    );
  }
}

Member.propTypes = {};

export default Member;
