import React, { Component } from 'react';
import List from './component/List';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: "Bad Boys", src: "https://www.canalolympia.com/wp-content/uploads/2020/01/bad-boys-for-life-1080x1600.jpg", rating: "🌟🌟🌟🌟", id: Math.random() },
      { title: "Now you See Me", src: "https://img.filmsactu.net/datas/films/i/n/insaisissables/vm/insaisissables-affiche-519f792eb3730.jpg", rating: "🌟🌟🌟🌟", id: Math.random() },
      { title: "The Dark Knight", src: "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-dark-knight-rises-final-magistral-2128994/22608914-1-fre-FR/The-Dark-Knight-Rises-final-magistral.jpg", rating: "🌟🌟🌟🌟🌟", id: Math.random() },
      { title: "Grown Ups", src: "https://www.avoir-alire.com/local/cache-vignettes/L240xH320/arton13914-ecdc9.jpg?1578245241", rating: "🌟🌟🌟", id: Math.random() },
      { title: "Avengers", src: "https://unificationfrance.com/IMG/jpg/400-277.jpg", rating: "🌟🌟🌟🌟", id: Math.random() }],
      isLoading: true,
     
    }
   
  
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({
      isLoading:false
    })
  },3000)
    
  }
  render() {
   
    return (<div>
     <List movies={this.state.movies} isLoading={this.state.isLoading} />
    </div>);
  }
}

export default App;
