import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => ReactElement -JS Object => HtmlElement(Render)
//const rootData = React.createElement(
                        // 'h1',
                        // {id:'heading'},
                        // "Heading"
                        // );


//JSX => React.createElement => ReactElement -JS Object => HtmlElement(Render)                      
//const JSXData = <h1 id="heading" tabIndex="0">Heading</h1>;
//Transpiled/complied before it reaches to JS engine By - Parcel - Babel

const testHeading = <span id="heading" tabIndex="0">Headingsdsd</span>;

//JSX code writtent in multiple lines should be wrapped in parenthesis to avoid error
const heading = (
    <h1 className="head" tabIndex="0">
        Namaste React using JSX
    </h1>
);

//Functional Component
const HeadingComponent = () => {
    <h1>this is functional component</h1>;
};
//or we can also write it in one line as below
const HeadingComponent2 = () => <div><HeadingComponent />this is functional component 2</div>;

//function returning multiple elements should be wrapped in parenthesis and also in a single parent element like div, section, article etc. to avoid error
const HeadingComponent3 = () => {
    const name="sahil";
    return (
        <div>
            <h1>this is functional component 3</h1>
            <p>this is a {name} {testHeading}</p>
        </div>
    );
}
//better version of above code is as below and it only returns the JSX code
//Component composition - we can use one component inside another component
const HeadingComponent4 = () => (
   <div className="head">
       {HeadingComponent3()}{/* we can also call the functionnal component like this as a function bacause at the end of day a functional compoent is a normal js function and we can used js code inside parenthesis */}
       <HeadingComponent3 />
       <HeadingComponent3></HeadingComponent3>
        <h1>this is functional component 4</h1>
        <p>this is a paragraph</p>
   </div>
);

//console.log(rootData);
//console.log(JSXData);
//both of them give same response in console and also are same but the second one is more readable and easy to write and understand as compared to the first one which is created using react library

const root    = ReactDOM.createRoot(document.getElementById('root'));//this is how we create root using react dom library
//this is the place where each and every code will be executed or rendered in react
root.render(<HeadingComponent4 />);//this is how we render react element to the dom using react dom library
//this is how we render functional component to the dom using react dom library   