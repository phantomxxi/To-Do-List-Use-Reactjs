import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
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
    );
  }
}

export default Search;