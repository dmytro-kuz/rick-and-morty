import { charactersAPI } from "../../fetch/requests";
import { connect } from "react-redux";
import TabPanel from "./TabPanel";


const mapStateToProps = (state, ownProps) =>
  ownProps.contentType === "characters"
    ? {
        content: state.charactersReducer,
        info: state.charactersInfoReducer,
        error: state.charactersErrorReducer,
        API: charactersAPI,
        filters: {
          name: "",
          status: ["alive", "dead", "unknown", ""],
          species: "",
          type: "",
          gender: ["female", "male", "genderless", "unknown", ""],
        },
      }
    : null;

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(TabPanel);
