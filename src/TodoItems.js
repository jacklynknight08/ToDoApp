import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
    }

    // Defining the delete function to take the argument for the item key and bind 'this' in the constructor
    delete(key) {
        this.props.delete(key);
    }

    // The value of the listItems variable (below) is an array of li elements containing the content to print
    // Set the key attribute on each element to make it easier to keep track
    // Listen for click event and call delete
    // Using the arrow function maintains the default event argument while allowing me to pass in my own argument
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
    }

    render() {

        // Taking the list of todo items (or entries) and turning them into JSX elements by calling map on the items
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        // Show items added to the list
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;