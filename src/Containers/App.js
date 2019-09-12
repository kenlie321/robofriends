import React from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
//import {robots} from './robots';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchValue:""
        }
        //this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(users => {
            this.setState({robots:users});
        });
    }

    onSearchChange = (e) =>{
        this.setState({searchValue:e.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });
        if(filteredRobots.length === 0) return "Loading...";
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <Searchbox onSearchChange={this.onSearchChange} search={this.state.searchValue}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;