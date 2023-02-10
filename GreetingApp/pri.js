
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
