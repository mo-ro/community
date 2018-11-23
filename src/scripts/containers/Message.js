import { connect } from "react-redux";
import {
  submitMessage
} from "../actions/message.js";
import MessageArea from "../components/MessageArea";

const mapStateToProps = (state) => ({
  submitting: state.message.submitting
});

const mapDispatchToProps = dispatch => ({
  submitMessage(message) {
    dispatch(submitMessage(message));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);