import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
    }

    // The value of the listItems variable (below) is an array of li elements containing the content to print
    // Set the key attribute on each element to make it easier to keep track
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
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