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



// Use Effect
function useEffect(callback, dependencies) {
  let oldDeps = [];

  return function runEffect(newDeps) {
    const hasChanged = newDeps.some((dep, i) => dep !== oldDeps[i]);
    if (hasChanged) {
      callback();
      oldDeps = [...newDeps];

      
    }
  };
}

// 🧪 ব্যবহার:
// let count = 0;

// // Create effect function
// const effect = useEffect(() => {
//   console.log("Count changed to:", count);
// }, [count]);

