import React from 'react';
import './App.css';

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }

        //this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({monsters: data}));
    }

    handleChange = (e) => {
        this.setState(
            {searchField: e.target.value},
            () => console.log(e.target.value)
        );
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = searchField
            ? monsters.filter(
                item => item.name.toLowerCase().includes(searchField.toLowerCase())
            )
            : monsters;
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="search" handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

}

export default App