import React from "react";
import { connect } from "react-redux";
import { deleteFlow } from "../../actions";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Flow.css";

class Flow extends React.Component {
  componentWillUnmount() {
    this.props.deleteFlow();
  }

  render() {
    if (!!this.props.book) {
      return (
        <Container maxWidth="lg">
          <Card>
            <CardContent>
              <Typography variant="h4">Fluxo 1</Typography>
              {!this.props.book.story ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Trexo da História"
                  multiline
                  rows="20"
                />
              ) : (
                <div>{this.props.book.story}</div>
              )}
            </CardContent>
            <Grid>
              <CardActions className="button-wraper">
                <div>
                  <Button variant="outlined">Decisão 1</Button>
                </div>
                <div>
                  <Button variant="outlined">Decisão 2</Button>
                </div>
              </CardActions>
            </Grid>
          </Card>
        </Container>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { deleteFlow }
)(Flow);
