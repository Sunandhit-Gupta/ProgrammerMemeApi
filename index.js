// Option parameter taken by api 
// ----------------------------------------------------------------------------------------
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9449f3da7msh5287c3f0e67bf67p190ecbjsnf9dc5a20fc2e',
		'X-RapidAPI-Host': 'programming-memes-reddit.p.rapidapi.com'
	}
};
// Fetching data from api 
// -----------------------------------------------------------------------------------------
fetch('https://programming-memes-reddit.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response =>{ console.log(response[0].link)
        element = document.getElementById("ig");
        element.src = response[0].link; 
      
    }).catch(err => console.error(err));

// On clicking Next Button 
// -----------------------------------------------------------------------------------------
let i = 0;
 function clicked(){ 
    i = i+1;
    if(i>=141){
        console.log("zayda hogya re");
         i = 0;
     }

    console.log(i);
    fetch('https://programming-memes-reddit.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response =>{ console.log(response[i].link);
        element = document.getElementById("ig");
        element.src = response[i].link; 
        element2 = document.getElementById("ibtn");
        element2.innerHTML = "MemeNo = "+i ;
      
    }).catch(err => console.error(err));

 }
// ----------------------------------------------------------------------------------------- 



// On clicking BACK button
// -----------------------------------------------------------------------------------------
function back(){
    i=i-2;
    clicked();
}

//Taking input from Form.  
// ------------------------------------------------------------------------------------------
var frm = document.getElementById("form");
frm.addEventListener('submit',function(event){
    event.preventDefault() //prevents from auto submitting
    
    var inpt = document.getElementById("inpt").value;

    i=inpt-1;
    clicked();
})
// ------------------------------------------------------------------------------------------ 