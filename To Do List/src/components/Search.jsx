import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  // Lay du lieu state khi onChange
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  // Truyen du lieu state ra App khi an button Tim
  onSearch = () => {
    this.props.onSearch(this.state.onSearch);
  };
  render() {
    var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            name="keyword"
            className="form-control"
            placeholder="Nhập từ khóa..."
            value={keyword}
            onChange={this.onChange}
          />

          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSearch}
            >
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
