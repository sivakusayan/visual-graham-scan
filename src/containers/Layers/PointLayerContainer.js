import { connect } from 'react-redux';
import PointLayer from '../../components/Layers/PointLayer';
import connectWithStore from '../../state/store/connectWithStore';

const mapStateToProps = state => ({
  points: state.points.filter(point => point.status === 'NULL'),
});

export default connectWithStore(mapStateToProps)(PointLayer);
