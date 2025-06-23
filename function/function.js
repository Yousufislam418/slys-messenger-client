// image icons Link
const profile = '../assets/icons/profile-icon.png';
// Server url
const userUrl = 'https://slys-messenger-server.vercel.app/users';
const conversationUrl = 'https://slys-messenger-server.vercel.app/conversation';
const lsId = localStorage.getItem('slys-messenger-datas');



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


// Date Time Manage
function dateTime(eve){
 const dates = new Date(Number(eve));
 const date = dates.toDateString();
 const time = dates.toLocaleTimeString();
 const month = dates.getMonth() +1;
 const day = dates.getDay();
 const hours = dates.getHours();
 const minutes = dates.getMinutes();
 const seconds = dates.getSeconds();
 const milliseconds = dates.getMilliseconds(); 
 return {date, time, month, day, hours, minutes, seconds, milliseconds};
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





