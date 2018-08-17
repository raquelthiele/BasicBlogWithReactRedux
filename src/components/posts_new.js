import React, { Component } from 'react';
import  { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            name="title"
            component={this.renderTitleField}
          />
{/*          <Field
            name="categories"
          />
          <Field
            name="content"
          />*/}

          <button>Save</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'    //this string has to be unique
})(PostsNew);