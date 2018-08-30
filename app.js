var scrren = document.querySelector('#scrren');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var add = document.querySelector('#add');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var sub = document.querySelector('#sub');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var mul = document.querySelector('#mul');
var zero = document.querySelector('#zero');
var div = document.querySelector('#div');
var clr = document.querySelector('#clr');
var sum = document.querySelector("#sum");
var h1 = document.querySelector('#h1');

clr.addEventListener('click', function(){
    h1.textContent = '';
});

//fourb.addEventListener('click', function(){
  //  h1.textContent -= '';
//});


one.addEventListener('click', function(){
    h1.textContent += '1';
    screen.style.backgroundColor='blue';

});
two.addEventListener('click', function(){
    h1.textContent += '2';
});
three.addEventListener('click', function(){
    h1.textContent += '3';
});

add.addEventListener('click', function(){
    h1.textContent += '+';
});
 
four.addEventListener('click', function(){
    h1.textContent += '4';
});

five.addEventListener('click', function(){
    h1.textContent += '5';
});

six.addEventListener('click', function(){
    h1.textContent += '6';
});

sub.addEventListener('click', function(){
    h1.textContent += '-';
})

seven.addEventListener('click', function(){
    h1.textContent += '7';
});
eight.addEventListener('click', function(){
    h1.textContent += '8';
});
nine.addEventListener('click', function(){
    h1.textContent += '9';
});
mul.addEventListener('click', function(){
    h1.textContent += '*';
});

zero.addEventListener('click', function(){
    h1.textContent += '0';
});

div.addEventListener('click', function(){
    h1.textContent += '/';
});

sum.addEventListener("click",ev);
function ev(){
    h1.textContent = eval(h1.textContent);
};

