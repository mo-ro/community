import { connect } from 'react-redux';
import TalkPage from "../components/TalkPage";

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
  direction: state.character.direction,
  isWalking: state.character.isWalking,
  cannotWalk: state.character.cannotWalk,
  position_x: state.character.position_x,
  position_y: state.character.position_y,
  message: state.message.message
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TalkPage);