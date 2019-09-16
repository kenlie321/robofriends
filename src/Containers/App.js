import React from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import {setSearchField, getRobots} from '../actions/actions';

const mapStateToProps = state => {
    return {
        searchField:state.searchRobots.searchField,
        robots:state.getRobots.robots,
        isPending:state.getRobots.isPending,
        error:state.getRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onGetRobots: () => dispatch(getRobots()),
    }
}

class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         // searchField:""
    //     }
    //     //this.onSearchChange = this.onSearchChange.bind(this);
    // }

    componentDidMount(){
        this.props.onGetRobots();
        // fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
        //     return response.json();
        // }).then(users => {
        //     this.setState({robots:users});
        // });
    }

    // onSearchChange = (e) =>{
    //     this.setState({searchField:e.target.value});
    // }
    render(){
        const filteredRobots = this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
        if(this.props.isPending) return "Loading...";
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <Searchbox onSearchChange={this.props.onSearchChange} search={this.props.searchField}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);