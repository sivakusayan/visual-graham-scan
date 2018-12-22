import PointLayer from '../../components/Layers/PointLayer';
import connectWithStore from '../../state/store/connectWithStore';

const mapStateToProps = state => ({
  points: state.points,
});

export default connectWithStore(mapStateToProps)(PointLayer);
