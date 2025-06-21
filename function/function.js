// show hide elements by id 
function showElementById(elements){
 const element = document.getElementById(elements);
 element.classList.remove('none');
}
function hideElementById(elements){
 const element = document.getElementById(elements);
 element.classList.add('none');
}

// class list add remove
function classListAdd(elements,o='-', oo='-', ooo='-'){
 const elementId = document.getElementById(elements);
 elementId.classList.add(o,oo,ooo);
}
function classListRemove(elements,o='-', oo='-', ooo='-'){
 const elementId = document.getElementById(elements);
 elementId.classList.remove(o,oo,ooo);
}


