import React from "react";
import { connect } from "react-redux";

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

import "./UserDetail.css";

class UserDetail extends React.Component {
  getUserDetail = _ => {
    const user = this.props.user.info.data;
    return (
      <div>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography component="p">{user.email}</Typography>
      </div>
    );
  };

  render() {
    const list = this.props.book.list.data.results;
    return (
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
              <Button size="small" color="primary">
                Editar Perfil
              </Button>
              <Button size="small" color="primary">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, book: state.book };
};

export default connect(mapStateToProps)(UserDetail);
