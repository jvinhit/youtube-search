import {getYoutubeList} from '../redux/actions/index'
import {connect } from 'react-redux';
import YouTuBeList from '../components/Youtube'
export default  connect(
  (state, ownProps) => ({ youtubelist: state.youtubelist }),
  {
    onYoutubeList: (keySearch) => getYoutubeList(keySearch)
  }
)(YouTuBeList)

