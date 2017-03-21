import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyCUCs6Mjwm0TC61YnX4peEaU0qNGfYMrf8'

// Create a new component. This component should produce HTML.
class App extends Component {
  constructor ( props ) {
    super ( props )

    this.state = {
      videos: [],
      selectedVideo: null
    }

  }

  videoSearch( searchTerm ) {
    YTSearch( { key: API_KEY, term: searchTerm }, ( videos ) => {
      this.setState( {
         videos: videos,
         selectedVideo: videos[ 0 ]
       } )
    } )
  }

  render () {
    const videoSearch = _.debounce( ( term ) => { this.videoSearch( term ) }, 300 )

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList  videos={ this.state.videos }
                    onVideoSelect={ selectedVideo => this.setState( { selectedVideo } ) }
        />
      </div>
    )
  }
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render( <App />, document.querySelector( '.container' ) )
