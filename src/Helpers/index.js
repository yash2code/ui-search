import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

export function renderInputComponent(inputProps) {
  // custom input component
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <Paper className={classes.root} elevation={3}>
      <TextField
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            notchedOutline: classes.notchedOutline
          }
        }}
        id="standard-search"
        label="I'm looking for ..."
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        {...other}
      />
    </Paper>
  );
}

export function renderSuggestion(suggestion, { query, isHighlighted }) {
  /*** render suggestions with
   highlighting ***/
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem
      selected={isHighlighted}
      component="div"
      style={{ borderRadius: 24 }}
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span
              key={String(index)}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

export function getSuggestionValue(suggestion) {
  /*** input value when
   suggestion is clicked ***/
  return suggestion + " ";
}
