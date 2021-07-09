import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    // Map tasks và truyền vào các thuộc tính id, name, status
    var { tasks } = this.props; // var tasks = this.props.tasks
    var elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus} // truyen props onUpdateStatus tu taskList vao TaskItem
          onDelete={this.props.onDelete} // truyen props onDelete tu taskList vao TaskItem
        />
      );
    });
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
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
