import { connect } from 'react-redux';
import PointLayer from '../../components/Layers/PointLayer';

const mapStateToProps = state => ({
  points: state.points.filter(point => point.status === 'NULL'),
});

export default connect(mapStateToProps)(PointLayer);
