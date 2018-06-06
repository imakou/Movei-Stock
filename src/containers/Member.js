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
          className="MemberJumbotron d-flex align-items-stretch position-relative"
        >
          <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(113, 8, 9, 0.8)" }}
          />
          <div className="container MovieDetailJumbotron">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <span>
                    <h1>Imakou</h1>
                  </span>
                  <span>
                    <h6>
                      <small>2018/06/05</small>
                    </h6>
                  </span>
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
