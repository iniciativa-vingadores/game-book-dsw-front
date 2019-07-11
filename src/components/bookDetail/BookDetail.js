import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getFlow } from "../../actions";

import Container from "@material-ui/core/Container";

import "./BookDetail.css";

class BookDetail extends React.Component {
  state = { flow: false };

  renderFlow = _ => {
    if (this.state.flow) {
      this.props.getFlow();
      return <Redirect to="/books/read/1" />;
    }
  };
  render() {
    return (
      <Container maxWidth="lg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="book-card">
                <div className="picture-book">
                  <img alt="default" src="/book.png" />
                </div>
                <div className="content">
                  <h1>Vingadores</h1>
                  <div className="divisor" />
                  <ul className="tags">
                    <li>Aventura</li>
                    <li>Super-heróis</li>
                  </ul>
                  <div className="userInfo">
                    <div className="icon icon-data">
                      <svg
                        id="Camada_1"
                        data-name="Camada 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63.34 64.38"
                      >
                        <title>noun_date_1146237</title>
                        <path d="M52.34,5.54H48.75V3a3,3,0,0,0-6,0V5.54H20.59V3a3,3,0,0,0-6,0V5.54H11a11,11,0,0,0-11,11V53.38a11,11,0,0,0,11,11H52.34a11,11,0,0,0,11-11V16.54A11,11,0,0,0,52.34,5.54ZM11,11.54H14.6v4.54a3,3,0,1,0,6,0V11.54H42.75v4.54a3,3,0,0,0,6,0V11.54h3.59a5,5,0,0,1,5,5v9.1H6v-9.1a5,5,0,0,1,5-5ZM52.34,58.38H11a5,5,0,0,1-5-5V31.64H57.34V53.38A5,5,0,0,1,52.34,58.38Z" />
                      </svg>
                      <p>25/09/2019</p>
                    </div>
                    <div className="icon icon-user">
                      <svg
                        id="Camada_1"
                        data-name="Camada 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 258 280.75"
                      >
                        <title>noun_User_2528305</title>
                        <path
                          d="M89,124a9.67,9.67,0,0,1,0,14,10.71,10.71,0,0,1-14,1c-16-15-26-37-26-59a80,80,0,0,1,160,0c0,27-14,53-37,67,52,19,86,69,86,124,0,13-20,13-20,0,0-59-48-112-109-111C70,157,20,213,20,271c0,13-20,13-20,0,0-71,58-131,130-131,33,0,59-27,59-60A60,60,0,0,0,69,80,57.07,57.07,0,0,0,89,124Z"
                          transform="translate(0 0)"
                        />
                      </svg>
                      <p>Jon Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-8">
              <h2 className="description-book-title">Descrição</h2>
              <p className="description-book">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </p>
              <button
                className="start-play"
                onClick={_ => this.setState({ flow: true })}
              >
                <svg
                  id="Camada_1"
                  data-name="Camada 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 54.02 38.01"
                >
                  <title>noun_Game_2532260</title>
                  <path
                    d="M58.72,27.18,53.16,5A6.57,6.57,0,0,0,49.56.52a5.49,5.49,0,0,0-4.87.1L42,2a4.61,4.61,0,0,1-2,.49H24A4.61,4.61,0,0,1,22,2L19.32.62a5.49,5.49,0,0,0-4.87-.1A6.57,6.57,0,0,0,10.85,5L5.28,27.18a9.29,9.29,0,0,0,1.9,8.29,7.11,7.11,0,0,0,6,2.52,7.45,7.45,0,0,0,5.67-3.59l4.84-7.71a5.8,5.8,0,0,1,2.06-2,12.76,12.76,0,0,1,12.58,0,5.8,5.8,0,0,1,2.06,2l4.84,7.71A7.45,7.45,0,0,0,50.9,38h.55a7.2,7.2,0,0,0,5.37-2.52A9.29,9.29,0,0,0,58.72,27.18ZM24,15.47H20v4a1,1,0,0,1-2,0v-4H14a1,1,0,0,1,0-2h4v-4a1,1,0,1,1,2,0v4h4a1,1,0,0,1,0,2Zm20-7a2,2,0,1,1-2,2A2,2,0,0,1,44,8.47Zm-4,8a2,2,0,1,1,2-2A2,2,0,0,1,40,16.47Zm4,4a2,2,0,1,1,2-2A2,2,0,0,1,44,20.47Zm4-4a2,2,0,1,1,2-2A2,2,0,0,1,48,16.47Z"
                    transform="translate(-4.99)"
                  />
                </svg>
                Iniciar Jogo
              </button>
            </div>
          </div>
        </div>
        {this.renderFlow()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { getFlow }
)(BookDetail);
