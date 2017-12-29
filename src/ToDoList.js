import React, { Component } from "react";

class TodoList extends Component {
 constructor (props, context) {
   super(props, context);
  //  Defining an items array property that will store various items entered
    this.state = {
      items: []
    };

   this.addItem = this.addItem.bind(this);
 }
  addItem(e) {

    // Store the current value of the items state object
    var itemArray = this.state.items;

    // Check to see if input element has any content inside it
    // If empty, don't do anything
    // If text entered, add it to the start of the array of items
    if( this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      // Setting the state's items property to the value of the itemArray
      this.setState({
        items: itemArray
      });

      // Clear the value of the input element to make room for the next item
      this._inputElement.value = "";
    }

    console.log(itemArray);

    // Override the event's default behavior
    // Do not want the page to reload and clear everything out so this blocks the default behavior
    e.preventDefault();
  }
 render() {
   return (
     <div className="todoListMain">
       <div className="header">
        {/* Listen for submit even on the form itself */}
        {/* Call the addItem method when the event is heard */}
         <form onSubmit={this.addItem}>
          {/* Store a reference to our input element to access it anywhere inside the component */}
           <input ref={(a) => this._inputElement = a} placeholder="enter task">
           </input>
           <button type="submit">add</button>
         </form>
       </div>
     </div>
   );
 }
}

export default TodoList;