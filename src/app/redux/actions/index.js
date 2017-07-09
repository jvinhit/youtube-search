import $ from 'jquery';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBvOcnf9DHFLpMPgAGqmVBAqTwnW7NESJo';
export const getYoutubeList = query => dispatch => {
    dispatch({type:"ytube_loading"});
    YTSearch({key: API_KEY, term: query,maxResults:25,part: 'statistics'}, (videos) => {
        dispatch({ type:"ytube", data: videos})
    });
}