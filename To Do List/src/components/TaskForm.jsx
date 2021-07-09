import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
  }

  // Truyen props tu App vao TaskForm
  onCloseForm = () => {
    this.props.onCloseForm();
  };

  // Lay data cua input va select truyen vao trong state
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false; // ep kieu string "true" "false" ve kieu boolean
    }
    this.setState({
      [name]: value,
    });
  };

  // Truyen state vao props de sent data sang App de render
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // Cancel & close form
    this.onClear();
    this.onCloseForm();
  };

  // Xoa du lieu o state (chuc nang xoa du lieu o task form)
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm Công Việc
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>

            <select
              name="status"
              className="form-control"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span
                  className="iconify mr-5"
                  data-icon="akar-icons:circle-plus"
                  data-inline="true"
                ></span>
                Lưu lại
              </button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span
                  className="iconify mr-5"
                  data-icon="fa-regular:times-circle"
                  data-inline="true"
                ></span>
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
