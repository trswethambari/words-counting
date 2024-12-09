let button = document.getElementsByClassName('btn')[0];
button.addEventListener('click',function(){
    let sentence=document.getElementsByClassName('words')[0].value;
    let sen=sentence.trim().split(/\s+/);
    let counts=sen.length;
   
    let output=document.getElementById('answer');
    output.innerHTML=`<h3>${counts} words</h3>`
});

