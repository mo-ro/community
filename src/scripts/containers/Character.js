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
  direction: state.character.direction,
  isWalking: state.character.isWalking,
  cannotWalk: state.character.cannotWalk,
  position: {
    x: state.character.position.x,
    y: state.character.position.y
  }
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
  judgeWalk(event, mapState, currentPosition) {
    const nextPosition = currentPosition;
    switch (event.keyCode) {
      case 37:
        nextPosition.x--;
        break;
      case 38:
        nextPosition.y--;
        break;
      case 39:
        nextPosition.x++;
        break;
      case 40:
        nextPosition.y++;
        break;
      default:
        break;
    }
    if(mapState[nextPosition.y][nextPosition.x] !== 0) {
      dispatch(cannotWalk());
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveArea);