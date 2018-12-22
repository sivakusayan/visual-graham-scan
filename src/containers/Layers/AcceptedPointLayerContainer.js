import { connect } from 'react-redux';
import AcceptedPointLayer from '../../components/Layers/AcceptedPointLayer';

const mapStateToProps = state => ({
  points: state.points.filter(point => point.status === 'ACCEPTED'),
});

export default connect(mapStateToProps)(AcceptedPointLayer);
