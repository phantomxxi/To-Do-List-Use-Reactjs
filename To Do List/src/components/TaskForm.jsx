import React, { Component } from "react";

class TaskForm extends Component {
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm Công Việc
            <span
              className="iconify text-right"
              data-icon="akar-icons:circle-plus"
              data-inline="true"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <label>Trạng Thái :</label>

            <select name="status" className="form-control">
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
              <button type="submit" className="btn btn-danger">
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
