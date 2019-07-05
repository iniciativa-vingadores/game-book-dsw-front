import React from "react";
import { logoutUser, removeDetailUser, deleteUser } from "../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//import Material-ui
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";

import "./UserDetail.css";

class UserDetail extends React.Component {
  state = {
    updateUser: false,
    deleteDialog: false
  };

  getUserDetail = _ => {
    const user = this.props.user.info;
    return (
      <div>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography component="p">{user.email}</Typography>
      </div>
    );
  };

  onClickUpdateUser = _ => {
    this.setState({ updateUser: true });
  };

  onClickDeleteUser = _ => {
    this.setState({ deleteDialog: true });
  };

  renderUpdate = _ => {
    if (this.state.updateUser) {
      return <Redirect to={`/users/${this.props.user.info.id}/update`} />;
    }
  };

  handleClose = _ => {
    this.setState({ deleteDialog: false });
  };

  handleCloseExclude = _ => {
    const { auth } = this.props.user;
    this.props.deleteUser(auth.token, auth.id);
  };

  renderDelete = _ => {
    if (this.state.deleteDialog) {
      return (
        <div>
          <Dialog
            open={true}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Você deseja realmente apagar sua conta?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Você desativará sua conta, caso deseje reativa-lá, apenas logue
                novamente!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Não
              </Button>
              <Button
                onClick={this.handleCloseExclude}
                color="primary"
                autoFocus
              >
                Sim
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  };

  onSubimitResult = terms => {
    //
  };

  render() {
    if (!!this.props.user && !!this.props.user.auth) {
      const list = this.props.book.list.data.results;
      return (
        <Container maxWidth="lg">
          <div className="grid">
            <div className="item account">
              <Card>
                <CardMedia
                  className="media"
                  image="/user_default.jpeg"
                  title="Account image"
                />
                <CardContent>{this.getUserDetail()}</CardContent>
                <CardActions>
                  <Button
                    onClick={this.onClickUpdateUser}
                    size="small"
                    color="primary"
                  >
                    Editar Perfil
                  </Button>
                  <Button
                    onClick={this.onClickDeleteUser}
                    size="small"
                    color="primary"
                  >
                    Excluir conta
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className="item books">
              <Card>
                <div>
                  <GridList cellHeight={250} className="gridList">
                    <GridListTile
                      key="Subheader"
                      cols={2}
                      style={{ height: "auto" }}
                    >
                      <ListSubheader component="div">Meus livros</ListSubheader>
                    </GridListTile>
                    {list.map(element => (
                      <GridListTile key={element.id}>
                        <img
                          alt="default"
                          src="/default_file.png"
                          className="book-image"
                        />
                        <GridListTileBar
                          title={element.name}
                          subtitle={element.keywords.map(e => `[${e}] `)}
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </Card>
            </div>
            {this.renderUpdate()}
            {this.renderDelete()}
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user, book: state.book };
};

export default connect(
  mapStateToProps,
  {
    deleteUser,
    removeDetailUser,
    logoutUser
  }
)(UserDetail);
