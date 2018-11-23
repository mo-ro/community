import { connect } from "react-redux";
import {
  submitMessage,
  editMessage
} from "../actions/message.js";
import MessageArea from "../components/MessageArea";

const mapStateToProps = (state) => ({
  message: state.message.message
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