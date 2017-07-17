import React, {Component, createFactory ,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
export default class YouTuBeList extends Component {
    constructor(props){
        super(...props);
        this.state = {keySearch: "", videoselect : null};
        this.setSearchKey = this.setSearchKey.bind(this);
        this.setVideoSelected = this.setVideoSelected.bind(this);
    }
    setSearchKey(query) {
        this.setState({keySearch: query});
        this.props.onYoutubeList(this.state.keySearch);
    }
    setVideoSelected(video) {
        this.setState({videoselect:video});
    }
    componentWillMount(){
         this.setSearchKey("");
    }
    componentDidMount(){
        this.setSearchKey("");
    }
    componentWillReceiveProps(nextProps){
        let videosSelected = nextProps.youtubelist.data[0];
        this.setState({videoselect: videosSelected});
    }
    onFocusFeild(){
        this.textInput.style.color = "#ff0000";
    }
    static displayName = 'App'
    render(){
        const {state: {keySearch}, props: {onYoutubeList, youtubelist : {data, loading}}, } = this;
        return(
            <div className="row">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text  alert button"><strong>Component Youtube</strong></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>
                                <span className="statusVideo">{loading}</span>
                            </li>
                            <li>
                                <input type="search" placeholder="Search"  value={keySearch}  onChange={(e) => (this.setSearchKey(e.target.value))} ref={(input) => { this.textInput = input; }}/>
                            </li>
                            <li>
                                <button type="button" className="button"  onClick={(e) => {this.onFocusFeild(); onYoutubeList(keySearch)}}>Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <VideoList videos={data} onVideoSelect={ (videoitem) =>  this.setState({videoselect: videoitem})}/>
                    <VideoDetail video={this.state.videoselect} />
                </div>
            </div>
        )
    }
}

