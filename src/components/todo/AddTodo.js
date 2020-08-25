import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input type="text" 
                    name="title"
                    placeholder="Add Todo item..."
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{flex: '10', padding: '5px', marginBottom: '10px', marginTop: '10px'}} 
                    />
                    <input type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1', padding: '5px', marginBottom: '10px', marginTop: '10px'}} 
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo


//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.array.isRequired
}

