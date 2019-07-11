import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import "./CreateStory.css";

class CreateStory extends React.Component {
  render() {
    if (!!this.props.user && !!this.props.user.auth) {
      return (
        <Container maxWidth="md">
          <Grid
            spacing={2}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h3">Criando sua Historia</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Titulo da Historia"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Resumo da historia"
                multiline
                rows="4"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Palavras-Chaves"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Genero da Historia</InputLabel>
                <Select>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="text-button-file"
                type="file"
              />
              <label htmlFor="text-button-file">
                <Button fullWidth variant="contained" component="span">
                  Escolher Capa da Historia &nbsp;
                  <CloudUploadIcon />
                </Button>
              </label>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="primary">
                Avançar
              </Button>
            </Grid>
          </Grid>
        </Container>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  {}
)(CreateStory);
