import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>Học Angular 4</td>
        <td className="text-center">
          <span className="label label-danger">Kích hoạt</span>
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
