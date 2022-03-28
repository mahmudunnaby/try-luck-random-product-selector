import React from 'react';

const Question1 = () => {
    return (
        <div>
            <h1 className='question'>How React Works?</h1>
            <p> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when your data changes.React creates a virtual DOM and changes the dome using diff algorithm</p>
            <h1>what is the difference between props and state</h1>
            <h3>Props</h3>
            <p>Props are read-only and immutable.Props can be accessed by the child component.It is used to communicate between components.The stateless component can have props it makes component reusable. </p>
            <h3>State</h3>
            <p>State Changes can be asynchronous.It is mutable and holds information about the components.State cannot be accessed by child components.A Stateless components cannot have State.</p>
        </div>
    );
};

export default Question1;