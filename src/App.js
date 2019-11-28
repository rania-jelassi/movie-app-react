import React from "react";
import { movies } from "./data";
import "./App.css";
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import Rate from "./components/Rate/Rate";
import Movielist from "./components/MovieList /MovieList.js";
import Add from "./components/Add/Add";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: movies,
      filtredtab: [],
      minrate: 0,
      filteredTabByRate: []
    };
  }

  ajouterMovie = x => {
    let newState = this.state.tab;
    newState.push(x);
    this.setState({ tab: newState });
  };
  searchFilm = input => {
    this.setState({
      filtredtab: this.state.tab.filter(el => el.name.includes(input))
    });
  };
  sortByRating = rating => {
    this.setState({
      filteredTabByRate: this.state.tab.filter(el => el.rating == rating)
    });
  };
  onChange = newRate => {
    this.setState({
      minrate: newRate
    });
  };

  render() {
    return (
      <div className="App">
        <div className="head">
          <MovieSearch searchFilm={this.searchFilm} />
          <Rate etoile={this.state.minrate} onChange={this.onChange} />
        </div>
        <Movielist
          minrate={this.state.minrate}
          movies={
            this.state.filtredtab.length == 0
              ? this.state.tab
              : this.state.filtredtab
          }
        />
        <Add ajouterMovie={this.ajouterMovie} />
      </div>
    );
  }
}
export default App;
