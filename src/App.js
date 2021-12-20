import React, { Component, Fragment } from "react";

class App extends Component {
  state = {
    name: "",
    age: "",
    Items: [
      { id: 1, name: "Ali", age: 24 },
      { id: 2, name: "Mohamed", age: 25 },
      { id: 3, name: "Ahmed", age: 26 },
    ],
  };

  deletItem = (id) => {
    let Items = this.state.Items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ Items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let Items = this.state.Items;
    Items.push(item);
    this.setState(Items);
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
      this.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div className="App container">
        <h1>Todo App</h1>
        {/* todo item */}
        <div className="listItem text-center ">
          <div className="title">
            <div className="row ">
              <div className="col-6">
                <span className="name title">Name</span>
              </div>
              <div className="col-3">
                <span className="age title">Age</span>
              </div>
              <div className="col-3">
                <span className=" title"> Action</span>
              </div>
            </div>
          </div>
          <div className="info ">
            <div className="row">
              {this.state.Items.length > 0 ? (
                this.state.Items.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <div className="col-6 ">
                        <span className="name"> {item.name}</span>
                      </div>
                      <div className="col-3">
                        <span className="age"> {item.age}</span>
                      </div>
                      <div className="col-3">
                        <span
                          className="action icon"
                          onClick={() => this.deletItem(item.id)}
                        >
                          &times;
                        </span>
                      </div>
                    </Fragment>
                  );
                })
              ) : (
                <div className="col-md-12">
                  <p>ther is not item to show</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* add item */}
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
      </div>
    );
  }
}

export default App;
