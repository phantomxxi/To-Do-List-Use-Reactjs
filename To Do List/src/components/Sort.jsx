import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
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
                  className="iconify mr-5"
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
    );
  }
}

export default Sort;
