import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import { fetchFriends, postFriend, updateFriend, deleteFriend } from './actions/Actions'

import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  // refresh = () => {
  //   axios.get("http://localhost:5000/api/friends")
  //   .then(response => console.log(response))
  //     //this.setState({ friends: response.data }))
  //   .catch(err => console.log(err));
  // };

  postFriend = (friend) => {
    this.props.postFriend(friend);
  };

  deleteFriend = id => {
    this.props.deleteFriend(id);
  };

  updateFriend = friend => {
    axios.put(`http://localhost:5000/api/friends/${this.state.showId}`, friend)
      .then(response => { console.log(response)
        // this.refresh();
        // this.setState({ visible: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  showForm = id => {
    //this.setState({ visible: false, showId: id });
  };
  hideForm = e => console.log(e)
    //this.setState({ visible: true });

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {this.props.visible ? (
          <Route
            exact
            path="/"
            render={props => (
              <AddFriend
                friends={this.props.friends}
                postFriend={this.postFriend}
              />
            )}
          />
        ) : (
          <Route
            exact
            path="/"
            render={props => (
              <UpdateFriend
                friends={this.props.friends}
                hideForm={this.hideForm}
                updateFriend={this.updateFriend}
              />
            )}
          />
        )}
        <div className="friend-container">
          {this.props.friends.map(person => (
            <Friend
              key={person.id}
              friend={person}
              deleteFriend={this.deleteFriend}
              showForm={this.showForm}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  friends: state.friends,
  visible: state.visible,
  showId: state.showId
})

export default connect(mstp, { fetchFriends, postFriend, updateFriend, deleteFriend })(App)
