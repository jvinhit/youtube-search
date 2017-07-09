import React, {Component} from 'react';
import YouTuBeList from './Youtube';
import Footer from './Footer';
export default class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container fullWidth">
                {/*<Counter />
                <RandomImages />
                <Sum />*/}
                <YouTuBeList />
                <Footer />
            </div>
        )
    }
}