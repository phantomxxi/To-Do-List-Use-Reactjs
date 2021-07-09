import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id); // Truyen id cua tung task vao trong props onUpdateStatus
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-danger"
                : "label label-success"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span
              className="iconify mr-5"
              data-icon="mdi:lead-pencil"
              data-inline="true"
            ></span>
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span
              className="iconify mr-5"
              data-icon="fluent:delete-24-filled"
              data-inline="true"
            ></span>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
