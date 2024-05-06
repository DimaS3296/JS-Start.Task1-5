//N 1 "Original task" OK.

let link1 = document.querySelector('.link');
let linkName = link1.textContent
//console.log(linkName); //This code is OK!
console.log(link1); //As an option

link1.addEventListener('click', function (event) {
event.preventDefault();

linkName = prompt('change link name on page');
console.log(linkName);
link1.textContent = linkName;
});



//N 2 "Original task" OK.
 /*let link1 = document.querySelector('.link');
 link1.addEventListener('click', (event) => {
  event.preventDefault();
   });

link1.onclick = function(){
  let linkText = link1.textContent;
  linkText = prompt('change link on page');
  console.log(linkText);
  link1.textContent = linkText; 
  };*/


  /*N 1 "Once" OK!*/ 
         /* let func = function(e) {
            linkText = prompt('Change link on page');
            e.target.removeEventListener(e.type, func);
            console.log(linkText);
            link1.textContent = linkText;
            }
            let link1 = document.querySelector('.link');
            let linkText = link1.textContent
            link1.addEventListener('click', func) 
            //link1.addEventListener('click', (event) => {
           // event.preventDefault();
           // });*/
          
  