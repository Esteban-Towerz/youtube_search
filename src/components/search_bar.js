// the curly braces means import react and pull of the property called Component
import React, { Component } from 'react';

//Functional Component
// const SearchBar = () => {
//     return <input />;
// };

//Class Component
// change the Functional to Class component, we did this because we want the search bar have additional functionality
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
    
  render() {
    return (
        <div className="search-bar">
          <input //the input is now a controlled component
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;