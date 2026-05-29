import React from 'react';
import ReactDOM from 'react-dom/client';

const rootData = React.createElement(
                        'div',
                        {id:'parent'},
                        [
                            React.createElement(
                                'div',
                                {id:'subschild1'},
                                [
                                    React.createElement('div',{id:'subchhild11',className:'subchild'},'data11'),
                                    React.createElement('div',{id:'subchhild12',className:'subchild2'},'data12')
                                ]
                            ),
                            React.createElement('div',{id:'subschild2'},[
                                React.createElement('div',{id:'subchhild21',className:'subchild'},'data21'),
                                React.createElement('div',{id:'subchhild22',className:'subchild2'},'data22')
                            ]),
                            React.createElement('div',{id:'subschild3'},[
                                React.createElement('div',{id:'subchhild31',className:'subchild'},'data31'),
                                React.createElement('div',{id:'subchhild32',className:'subchild2'},'data32')
                            ])
                        ]
                        );


console.log(rootData);//this is the javascript object which is created by react library with some properties and values which we will use to render the element to the dom

const root    = ReactDOM.createRoot(document.getElementById('root'));//this is how we create root using react dom library
//this is the place where each and every code will be executed or rendered in react
root.render(rootData);//this is how we render react element to the dom using react dom library   