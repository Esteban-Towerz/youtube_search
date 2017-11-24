//go and find a library called 'react' in the node modules and assign it to the variable React
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyARZDbA08YYRklGX6kqB3oPsYpthz2Qh7o';

// this is a Functional base component no states. but contain a class base component[SearchBar]
// now is a Class component
 class App extends Component {
     constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
     }

     videoSearch(term) {
         YTSearch({ key: API_KEY, term: term }, (videos) => {
             this.setState({
                 videos: videos,
                 selectedVideo: videos[0]
             });
             // = to say this.setState({videos: videos}); ES6;
         });
     }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
//it creates an instance of App and passes to the DOM
// the second argument is a reference to an existing DOM node on the page, 
// like a target container, is the root node of the entire react app.
ReactDOM.render(<App />, document.querySelector('.container'));