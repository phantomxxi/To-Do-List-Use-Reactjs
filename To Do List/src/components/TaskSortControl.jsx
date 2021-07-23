/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { faSortAlphaDownAlt } from "@fortawesome/free-solid-svg-icons";

class TaskSortControl extends Component {
  onClick = (sortBy, sortValue) => {
    console.log(sortBy, "-", sortValue);
    this.props.onSort(sortBy, sortValue);
  };

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
            <li onClick={() => this.onClick("name", 1)}>
              <a
                role="button"
                className={
                  this.props.sortBy === "name" && this.props.sortValue === 1
                    ? "sort_selected"
                    : ""
                }
              >
                <span className="mr-5">
                  <FontAwesomeIcon icon={faSortAlphaDown} />
                </span>
                Tên A-Z
              </a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a
                role="button"
                className={
                  this.props.sortBy === "name" && this.props.sortValue === -1
                    ? "sort_selected"
                    : ""
                }
              >
                <span className="mr-5">
                  <FontAwesomeIcon icon={faSortAlphaDownAlt} />
                </span>
                Tên Z-A
              </a>
            </li>
            <li role="seperator" className="divider"></li>
            <li onClick={() => this.onClick("status", 1)}>
              <a
                role="button"
                className={
                  this.props.sortBy === "status" && this.props.sortValue === 1
                    ? "sort_selected"
                    : ""
                }
              >
                Trạng Thái Kích Hoạt
              </a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a
                role="button"
                className={
                  this.props.sortBy === "status" && this.props.sortValue === -1
                    ? "sort_selected"
                    : ""
                }
              >
                Trạng Thái Ẩn
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskSortControl;
