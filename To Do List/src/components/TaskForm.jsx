/* eslint-disable react/no-typos */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  // Xu ly logic sau khi click nut sua thi truyen state da update tu props vao
  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
  }

  // Logic khi form mo roi van nhan duoc props(nextProps)
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (!nextProps.task) {
      // Truong hop sua -> them
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
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
    event.preventDefault(); // Hủy bỏ sự kiện tự xóa hết dữ liệu sau khi submit or refresh trang
    this.props.onSubmit(this.state); // Sử dụng props để truyền state ra App
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
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {/* Logic nếu id truyền vào là '' thì thanh taskForm là Thêm Công Việc và nếu có giá trị id thì chuyển thành Cập Nhật Công Việc */}
            {/* Nếu có id thì là sửa còn không có id thì là thêm công việc */}
            {id !== "" ? "Cập Nhật Công Việc" : "Thêm Công Việc"}

            <span onClick={this.onCloseForm}>
              <FontAwesomeIcon icon={faTimesCircle} className="text-right" />
            </span>
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
