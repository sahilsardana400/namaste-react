// const heading = React.createElement('h1',{id:"heading",xyz:"sdsd"},'Content/children goes here');//this is how we create react element using react library

//we will created nested div elements and will render in inside root dom element
const parent = React.createElement(
                   'div',
                   {id:'parent'},
                   [
                    React.createElement('div',{id:'child1'}, [
                        React.createElement('h1',{id:'heading'},'H1 tag'),
                        React.createElement('h2',{id:'heading2'},'H2 tag')
                    ]),
                    React.createElement('div',{id:'child2'}, [
                        React.createElement('h1',{id:'heading'},'H1 tag'),
                        React.createElement('h2',{id:'heading2'},'H2 tag')
                    ])
                   ]
                );



//<div id="parent">

    // <div id="subchild1">
        // <div id="subchhild11">data11</div>
        // <div id="subchhild12">data12</div>
    // </div>
        
    // <div id="subchild2">
        // <div id="subchhild21">data21</div>
        // <div id="subchhild22">data22</div>
    // </div>

    // <div id="subchild3">
        // <div id="subchhild31">data31</div>
        // <div id="subchhild32">data32</div>
    // </div>

// </div>

const rootData = React.createElement(
                        'div',
                        {id:'parent'},
                        [
                            React.createElement(
                                'div',
                                {id:'subschild1'},
                                [
                                    React.createElement('div',{id:'subchhild11',class:'subchild'},'data11'),
                                    React.createElement('div',{id:'subchhild12',class:'subchild2'},'data12')
                                ]
                            ),
                            React.createElement('div',{id:'subschild2'},[
                                React.createElement('div',{id:'subchhild21',class:'subchild'},'data21'),
                                React.createElement('div',{id:'subchhild22',class:'subchild2'},'data22')
                            ]),
                            React.createElement('div',{id:'subschild3'},[
                                React.createElement('div',{id:'subchhild31',class:'subchild'},'data31'),
                                React.createElement('div',{id:'subchhild32',class:'subchild2'},'data32')
                            ])
                        ]
                        );


console.log(rootData);//this is the javascript object which is created by react library with some properties and values which we will use to render the element to the dom

const root    = ReactDOM.createRoot(document.getElementById('root'));//this is how we create root using react dom library
//this is the place where each and every code will be executed or rendered in react
root.render(rootData);//this is how we render react element to the dom using react dom library   