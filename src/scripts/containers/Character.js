import { connect } from 'react-redux';
import {
  moveCharacterUp,
  moveCharacterRight,
  moveCharacterDown,
  moveCharacterLeft,
  whileWalking,
  stopWalking,
  cannotWalk,
} from '../actions/character';
import MoveArea  from '../components/MoveArea';

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
  direction: state.character.direction,
  isWalking: state.character.isWalking,
  cannotWalk: state.character.cannotWalk,
  position_x: state.character.position_x,
  position_y: state.character.position_y,
  message: state.message.message,
  submitting: state.message.submitting
});

const mapDispatchToProps = dispatch => ({
  moveCharacter(event, cannotWalk) {
    switch (event.keyCode) {
      case 37:
        dispatch(moveCharacterLeft(cannotWalk));
        dispatch(whileWalking());
        break;
      case 38:
        dispatch(moveCharacterUp(cannotWalk));
        dispatch(whileWalking());
        break;
      case 39:
        dispatch(moveCharacterRight(cannotWalk));
        dispatch(whileWalking());
        break;
      case 40:
        dispatch(moveCharacterDown(cannotWalk));
        dispatch(whileWalking());
        break;
      default:
        break;
    }
  },
  startCharacter() {
    dispatch(whileWalking());
  },
  stopCharacter() {
    dispatch(stopWalking());
  },
  judgeWalk(event, mapState, currentPosition_x, currentPosition_y) {
    let nextPosition_x = currentPosition_x;
    let nextPosition_y = currentPosition_y;
    switch (event.keyCode) {
      case 37:
        nextPosition_x--;
        break;
      case 38:
        nextPosition_y--;
        break;
      case 39:
        nextPosition_x++;
        break;
      case 40:
        nextPosition_y++;
        break;
      default:
        break;
    }
    if(mapState[nextPosition_y][nextPosition_x] !== 0) {
      dispatch(cannotWalk());
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveArea);