import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { friendz } from './friendz';
import './App.css';
//state of program
class App extends Component{
    constructor(){
        super()
        this.state = {
            friendz: friendz,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }
    render()    {
        const filteredFriendz = this.state.friendz.filter(friendz =>{
            return friendz.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 

        return(
            <div className='tc'>
                <h1 className='f1'>Friendz</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist  friendz={filteredFriendz}/>
            </div>
        );
    }
} 
export default App;