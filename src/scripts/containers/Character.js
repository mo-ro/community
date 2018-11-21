import { connect } from 'react-redux';
import {
  moveCharacterUp,
  moveCharacterRight,
  moveCharacterDown,
  moveCharacterLeft,
  whileWalking,
  stopWalking,
} from '../actions/character';
import MoveArea  from '../components/MoveArea';

const mapStateToProps = (state) => ({
  direction: state.character.direction,
  isWalking: state.character.isWalking,
  position: {
    x: state.character.position.x,
    y: state.character.position.y
  }
});

const mapDispatchToProps = dispatch => ({
  moveCharacter(event) {
    switch (event.keyCode) {
      case 37:
        dispatch(moveCharacterLeft());
        dispatch(whileWalking());
        break;
      case 38:
        dispatch(moveCharacterUp());
        dispatch(whileWalking());
        break;
      case 39:
        dispatch(moveCharacterRight());
        dispatch(whileWalking());
        break;
      case 40:
        dispatch(moveCharacterDown());
        dispatch(whileWalking());
        break;
      default:
        break;
    }
  },
  stopCharacter() {
    dispatch(stopWalking());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveArea);