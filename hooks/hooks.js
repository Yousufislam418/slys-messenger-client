//--- State Hook ------------------->
function useState(initialValue) {
   let value = initialValue;
   const get = () => value;
   const set = (newValue) => {
      value = newValue;
   };
   return [get, set];
} 

//----------------------------------->


