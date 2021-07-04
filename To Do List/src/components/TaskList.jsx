import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" name="filterName" />
            </td>
            <td>
              <select name="filterStatus" className="form-control">
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={0}>Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </tbody>
      </table>
    );
  }
}

export default TaskList;
