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
  isWalking: state.character.isWalking
});

const mapDispatchToProps = dispatch => ({
  moveCharacter(event) {
    dispatch(whileWalking());
    switch (event.keyCode) {
      case 37:
        dispatch(moveCharacterLeft());
        break;
      case 38:
        dispatch(moveCharacterUp());
        break;
      case 39:
        dispatch(moveCharacterRight());
        break;
      case 40:
        dispatch(moveCharacterDown());
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