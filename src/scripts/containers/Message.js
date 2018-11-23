import { connect } from "react-redux";
import {
  submitMessage,
  editMessage
} from "../actions/message.js";
import MessageArea from "../components/MessageArea";

const mapStateToProps = (state) => ({
  submitting: state.message.submitting
});

const mapDispatchToProps = dispatch => ({
  submitMessage() {
    dispatch(submitMessage());
  },
  editMessage(message) {
    dispatch(editMessage(message));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);