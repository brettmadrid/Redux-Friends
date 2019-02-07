import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      visible: true,
      showId: null
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    axios.get("http://localhost:5000/api/friends")
    .then(response => this.setState({ friends: response.data }))
    .catch(err => console.log(err));
  };

  postFriend = friend => {
    axios.post("http://localhost:5000/api/friends", friend)
      .then(response => {
        console.log(response);
      })
      .then(response => {
        const newFriends = this.state.friends;
        newFriends.push(friend);
        this.setState({ friends: newFriends });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        console.log(response);
      })
      .then(response => {
        this.refresh();
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateFriend = friend => {
    axios.put(`http://localhost:5000/api/friends/${this.state.showId}`, friend)
      .then(response => {
        console.log(friend, this.state.showId);
        this.refresh();
        this.setState({ visible: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  showForm = id => {
    this.setState({ visible: false, showId: id });
  };
  hideForm = e => this.setState({ visible: true });

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {this.state.visible ? (
          <Route
            exact
            path="/"
            render={props => (
              <AddFriend
                friends={this.state.friends}
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
                friends={this.state.friends}
                hideForm={this.hideForm}
                updateFriend={this.updateFriend}
              />
            )}
          />
        )}
        <div className="friend-container">
          {this.state.friends.map(person => (
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

export default App;
