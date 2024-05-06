// N 1.

/*let input= document.querySelector('#printText');
let button = document.querySelector('button');
let textarea = document.querySelector('#dublicateField')


button.onclick = function(){
    //console.log ('text');
   // console.log(insert.value);
    let innerInputText = input.value;
    console.log(innerInputText);
    input.value = '';
};
button.addEventListener('click',function(event){
    textarea.textContent = event.preventDefault();
})


//console.log(input);
input.addEventListener('input', (e) =>{
//console.log(e.data);
textarea.textContent  +=  e.data
});
//console.log(textarea)*/

// End of N 1



//N 2.

let input = document.querySelector('#printText');
let button = document.querySelector('button');
let textarea = document.querySelector('#dublicateField')

button.addEventListener('click', function () {
    let innerInputText = input.value;
    console.log(innerInputText);
    input.value = '';
});
button.addEventListener('click', function (event) {
    textarea.textContent = event.preventDefault();
})

input.addEventListener('input', () => {
    textarea.textContent = input.value

});


// END of N 2.
