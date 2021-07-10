import "./App.css";
import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id : unique, name, status
      isDisplayForm: false,
      taskEditing: null,
    };
  }

  // Truyen du lieu vao state stasks sau khi generate data
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks")); // Chuyen du lieu tu dang string sang object
      this.setState({
        tasks: tasks,
      });
    }
  }

  // Logic Random ra ID
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  // Xet state neu true => false và ngược lại de dong mo task form
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };

  // Logic bam vao icon/button thi dong form
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };

  // Logic bam vao icon/button thi mo form
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  // Logic lay data task form sau khi submit
  onSubmit = data => {
    console.log(data);
    var { tasks } = this.state; // tasks = this.state.tasks
    // Logic nếu id bằng '' (thực hiện công việc Thêm Công Việc) thì mới tham chiếu đến generateId() và push data sang task list
    if (data.id === "") {
      data.id = this.generateID(); // task
      tasks.push(data);
    } else {
      // Trong trường hợp thực hiện công việc Editing
      // Tìm index và replay lại vị trí của task cần edit trong mảng
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null, // Sau khi lưu lại công việc đã sửa thì đóng form và chuyển state taskEditing về
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // chuyen du lieu sau khi submit tu dang Object sang string va luu vao localStogare
  };

  // logic update status tu true sang false va nguoc lai
  onUpdateStatus = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    // Logic nếu index mà trùng với index được chọn thì đổi ngược trạng thái status
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  // Logic lay ra index cua cac task thong qua id da lay duoc tu taskItem
  findIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    // Duyet qua cac tasks de chon ra task co id trung voi id cua task duoc chon
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  // Logic xo task item
  onDelete = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    // Logic nếu index mà trùng với index được chọn thì xoa task
    if (index !== -1) {
      // Ham splice dung de xoa voi doi so la index va so phan tu muon xoa
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };

  onUpdate = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };

  render() {
    var { tasks, isDisplayForm, taskEditing } = this.state;
    var elmTaskForm = isDisplayForm ? (
      <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        task={taskEditing}
      />
    ) : (
      ""
    ); // Nếu state isDisplayForm === true thì hiện taskform còn ngược lại thì ko hiện
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>

        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* Form */}
            {elmTaskForm}
          </div>

          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span
                className="iconify mr-5"
                data-icon="akar-icons:circle-plus"
                data-inline="true"
              ></span>
              Thêm Công Việc
            </button>

            {/* Search - Sort */}
            <Control />
            {/* List */}

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
