import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <input>Title</input>
        <input>Categories</input>
        <input>Contents</input>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    );
  }
}

export default connect(null)(PostsNew);