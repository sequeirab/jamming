import react from "react";
import './SearchBar.css';


class SearchBar extends react.Component {
    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;

/*
<div class="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <button class="SearchButton">SEARCH</button>
</div>
*/