import React from "react";
import { connect } from "react-redux";
import { readBook } from "../../actions";

import './ReadBook.css'

class ReadBook extends React.Component {
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="book-slide">
          
          <div className="book-card-detail">
              <div className="content">
                <h1>Capítulo 01</h1>
                <div className="divisor"></div>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica</p>
              </div>
              <div className="divisorHistory"></div>
            </div>
            
            <div className="book-card-detail">
              <div className="content">
                <h1>Capítulo 02</h1>
                <div className="divisor"></div>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica</p>
                  </div>
              <div className="divisorHistory"></div>
            </div>

            <div className="book-card-detail">
              <div className="content">
                <h1>Capítulo 03</h1>
                <div className="divisor"></div>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica</p>
                </div>
              <div className="divisorHistory"></div>
            </div>

            <div className="choice">
              <div className="decision one">
                  <div className="number-choice">1</div>
                  <p>Ação do Personagem</p>
              </div>
              <div className="decision two">
                <div className="number-choice">2</div>
                <p>Ação do Personagem</p>
              </div>
            </div>

            </div>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { readBook }
)(ReadBook);
