import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import "./Flow.css";

class Flow extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Typography variant="h4">Fluxo 1</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Trexo da História"
              multiline
              rows="20"
            />
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
  }
}

export default Flow;
