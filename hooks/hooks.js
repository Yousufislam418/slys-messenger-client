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
// Server url
const userUrl = 'https://slys-messenger-server.vercel.app/users';
const conversationUrl = 'https://slys-messenger-server.vercel.app/conversation';
const lsId = localStorage.getItem('slys-messenger-datas');




