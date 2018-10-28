import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Autosuggest from "react-autosuggest";
import { getSuggestions as getSuggestionApi } from "../API/server";
import {
  renderInputComponent,
  renderSuggestion,
  getSuggestionValue
} from "../Helpers";
import { styles } from "../styles";

//Search component

class Search extends Component {
  state = {
    value: "", // input value
    suggestions: [] // suggestions to be shown
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    // fetch suggestions from api
    getSuggestionApi(value.split(" ").splice(-1)[0])
      .then(res => {
        let val = res.filter(el => {
          return el !== ""; // filtering blank results
        });
        this.setState({ suggestions: [...val] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSuggestionsClearRequested = () => {
    // to set suggestions empty
    this.setState({
      suggestions: []
    });
  };

  handleInput = async (e, { newValue }) => {
    // fetching the value from input
    let input = await newValue;
    this.setState({ value: input });
  };
  render() {
    const { classes } = this.props;
    const autosuggestProps = {
      // props for <Autosuggest/>
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };
    return (
      <Grid //Using material grid for layout
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "90vh" }}
      >
        <Autosuggest
          theme={{
            container: classes.root,
            suggestionsList: classes.suggestionsList,
            suggestionsContainerOpen: classes.suggestionsContainerOpen
          }}
          {...autosuggestProps}
          inputProps={{
            classes,
            value: this.state.value,
            onChange: this.handleInput
          }}
          renderSuggestionsContainer={(
            options // render customize suggestions
          ) => (
            <Paper {...options.containerProps} className={classes.list}>
              {options.children}
            </Paper>
          )}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Search);
