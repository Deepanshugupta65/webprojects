import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";

// 1.. render multiple a
// ReactDOM.render([<h1>hello world</h1> , <p>flana dhimka</p>],document.getElementById("root"));

// 2..react fragment 
// ReactDOM.render(<><h1>hello world</h1>  <p>flana dhimka</p> </> , document.getElementById("root"));

// ReactDOM.render(<> <h1>Deepanshu gupta</h1> <p>List of best series</p> 
// <ol>
// <li>dark</li>
// <li>eact</li>
// </ol></> , document.getElementById("root"));
 

// how to expression  we will use {} for suing java script  and not use pf any condition statement if or while 
// const fname = "deepanshu";
// ReactDOM.render(
//     <> 
//     <h1> my name is {fname}</h1> <p> my luck number is {2+3} </p>
//     </>,
//     document.getElementById("root")
// );


// tmplate literals 
/*
const fname = "deepanshu";
const lname = "gupta";

const currentDate = new Date().toLocaleDateString();
const curtime = new Date().toLocaleTimeString();

// how to add img and link
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";

const links = "https://leetcode.com/problemset/all/"

const heading = {
    textAlign: 'center',
    color: 'blueviolet',
    fontFamily: "'Libre Franklin', sans-serif",
};
ReactDOM.render(
    <>
        <h1 style = {heading}>{`my self ${fname}  ${lname}`} </h1>
        <p> curent date = {currentDate}</p>
        <p> {`cuurent time = ${curtime}`}</p>
       <div>
       <a href={links} target = "_blank">
        <img src ={img1} alt ="random img"/>
        <img src ={img2} alt ="alt img"/>
        <img src ={img3} alt ="alter img"/>
         </a>   
       </div>    
    </>,
    document.getElementById('root')
);

*/

// greeting app 
let currdate = new Date();
currdate = currdate.getHours();
let greeting ='';

let cssstyle = {};
if(currdate >= 1 && currdate <12)
{
 greeting = "good moring";
 cssstyle.color = "red";
}
else if(currdate >= 12 && currdate <19){
    greeting ="good afternoon";
    cssstyle.color = "green";
}
else {
    greeting = "good night";
    cssstyle.color = "orange";
}
ReactDOM.render(
    <>
        <div className="box1">
        <h1> hello sir , <span style={cssstyle}> {greeting}</span> </h1>
        </div>
    </>,
    document.getElementById('root')
);
