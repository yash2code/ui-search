export const styles = theme => ({
  root: {                                       
    minWidth: "40%",
    background: "#B2DFDB",
    borderRadius: "24px"
  },
  list: {                                         
    borderRadius: "24px",
    position: "absolute",
    width: "39%",
    background: "#00BCD4"
  },
  notchedOutline: {                         
    borderRadius: "24px"
  },
  textField: {                                
    width: "100%",
    marginTop: "0px",
    marginBottom: "0px"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    width: "39%"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});
