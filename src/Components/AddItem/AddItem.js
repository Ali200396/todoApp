import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div className="listItem">
        <form onSubmit={this.handelSubmit}>
          <div className="row ">
            <div className="col-6">
              <input
                type="text"
                placeholder="Enter Your Name .."
                id="name"
                onChange={this.handelChange}
                value={this.state.name}
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                placeholder=" Age .."
                id="age"
                onChange={this.handelChange}
                value={this.state.age}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Add Item" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
