import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */}

            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Thêm Công Việc
                  <span
                    className="iconify text-right"
                    data-icon="fa-regular:times-circle"
                    data-inline="false"
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
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span
                className="iconify mr-5"
                data-icon="akar-icons:circle-plus"
                data-inline="true"
              ></span>
              Thêm Công Việc
            </button>
            {/* Search - Sort */}

            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                  />

                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                      <span
                        className="iconify mr-5"
                        data-icon="fa-solid:search"
                        data-inline="true"
                      ></span>
                      Tìm
                    </button>
                  </span>
                </div>
              </div>
              {/* Sort */}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Sắp xếp{" "}
                    <span
                      className="iconify ml-5"
                      data-icon="fa-solid:caret-square-down"
                      data-inline="false"
                    ></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a role="button" className="sort_selected">
                        <span
                          class="iconify mr-5"
                          data-icon="fa-solid:sort-alpha-down"
                          data-inline="true"
                        ></span>
                        Tên A-Z
                      </a>
                    </li>
                    <li>
                      <a role="button" className="sort_selected">
                        <span
                          className="iconify mr-5"
                          data-icon="fa-solid:sort-alpha-down-alt"
                          data-inline="true"
                        ></span>
                        Tên Z-A
                      </a>
                    </li>
                    <li role="seperator" className="divider"></li>
                    <li>
                      <a role="button">Trạng Thái Kích Hoạt</a>
                    </li>
                    <li>
                      <a role="button">Trạng Thái Ẩn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
