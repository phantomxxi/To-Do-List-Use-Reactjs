import "./App.css";
import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id : unique, name, status
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sortBy: "name",
      sortValue: 1,
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

  // Logic dong mo form khi Cap Nhat Cong Viec
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        // Thay đổi panel từ "Cập Nhật Công việc" thành "Thêm Công Việc"
        taskEditing: null,
      });
    } else {
      // Xet state neu true => false và ngược lại de dong mo task form
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        // Thay đổi panel từ "Cập Nhật Công việc" thành "Thêm Công Việc"
        taskEditing: null,
      });
    }
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

  // Logic updateState khi index tim thay trung voi id task duoc chon thi ten
  // cong viec trong form se trung voi ten cua cong viec can update dong thoi mo form
  onUpdate = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };

  // Logic filter ra name va status cua tasks
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  // Logic gan state cua task co keyword giong keyword can tim
  onSearch = keyword => {
    this.setState({
      keyword: keyword,
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
    console.log(this.state);
  };
  render() {
    var {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keyword,
      sortBy,
      sortValue,
    } = this.state;
    // Kiem tra Neu tim thay gia tri thi moi filter
    if (filter) {
      // Neu ton tai gia tri name o filter
      if (filter.name) {
        // filter() se duyet qua va tra ve cac tasks
        // indexOf() de kiem tra xem gia tri name co trung voi gia tri filter hay khong
        // Neu khong tim thay tra ve -1
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      // Kiem tra neu tim thay gia tri status thi ms thuc hien hanh vi
      tasks = tasks.filter(task => {
        // Kiem tra neu status = -1 thi lay ra con nguoc lai
        if (filter.status === -1) {
          return task;
        } else {
          // Dung toan tu 3 ngoi de chuyen dang number sang boolean cho trung voi property cua state status
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    // Logic loc ra task can tim tu keyword da go tren thanh search
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        else return 0;
      });
    }
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
            <TaskControl
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            {/* List */}

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  onFilter={this.onFilter}
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
