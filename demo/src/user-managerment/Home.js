import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "khai",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      keyword: ""
    };
  }

  handleOnSubmit = user => {
    user.id = Math.random();
    let userList = [...this.state.userList, user];
    this.setState({
      userList
    });
  };

  //Tim Vi Tri
  timViTri = id => {
    return this.state.userList.findIndex(user => user.id === id);
  };

  //Chuc nang Xoa
  handleDelete = user => {
    let userList = [...this.state.userList];
    let index = this.timViTri(user.id);
    if (index !== -1) {
      userList.splice(index, 1);

      this.setState({
        userList
      });
    }
  };

  //Chuc nang tim kiem
  handleSearch = keyword => {
    this.setState({
      keyword
    });
  };

  render() {
    let { userList, keyword } = this.state;

    userList = userList.filter(user => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search keyword={this.handleSearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users listUser={userList} delete={this.handleDelete} />
        <Modal onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Home;
