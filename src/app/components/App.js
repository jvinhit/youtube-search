import React, {Component} from 'react';
import YouTuBeList from '../containers/YoutubeContainer';
import Footer from './Footer';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container fullWidth">
                <YouTuBeList />
                <Footer />
            </div>
        )
    }
}