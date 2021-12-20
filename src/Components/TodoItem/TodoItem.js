import React, { Component, Fragment } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { Items, deletItem } = this.props;
    const length = Items.length;

    const theItem = length ? (
      Items.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="col-6 ">
              <span className="name"> {item.name}</span>
            </div>
            <div className="col-3">
              <span className="age"> {item.age}</span>
            </div>
            <div className="col-3">
              <span className="action icon" onClick={() => deletItem(item.id)}>
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
    );
    return (
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
          <div className="row">{theItem}</div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
