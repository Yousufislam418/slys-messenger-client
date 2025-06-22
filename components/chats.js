const yousufImg = 'https://i.ibb.co/wFwyycJn/myimage.jpg';

const chatbox = document.getElementById('chat-box');
const displayUser = document.getElementById('display-user');

// Custom hook
const [userData, setUserData] = useState([]); 
const [chatData, setChatData] = useState([]); 
const [user, setUser] = useState([]);

// get user data 
function userDataManage(){
   fetch(userUrl,{
   method: "GET",
   headers: {'content-type':'application/json'}
  }).then((res) => res.json()).then((userDatas)=> {
 
   setUserData(userDatas); // user hook
   userDataDisplay();

   });
}
userDataManage();


// Header Title Display User data
function userDataDisplay(){
const users = userData(0); 

 const selfUser = users.find((user) => user._id === lsId);
 displayUser.innerHTML += `
  <div class="h-50 bg-blue-8 align-center">
   <div class="flex">
   <img class="w-40 h-40 ml-8 shadow-2 round" src="${selfUser.img}"> 
   <h1 class="px-10 align-center aqua">${selfUser.name}</h1>
  </div>
 </div>`;

// User chat List display 
const userLists = users.filter((userList)=> userList._id !== lsId);
// users.forEach((user,index)=> {
userLists.forEach((user,index)=> {
 displayUser.innerHTML += `
 <div class="p-10 bg-base-8">
  <h1 id="userIds" class="base btn-md flex align-items-center" onclick="userOnClick('${user._id}')">
   <img class="base mr-10 w-40 h-40 border-1 -aqua-3 object-fit-cover round" src="${user?.image }">${user.number}</h1>
 </div>`;
});
}// userDataDisplay fn end




// userOnClick
function userOnClick(id){ 

 classListAdd('user-box','sm-none');
 classListRemove('chat-board-id','sm-none');

 const users = userData(0);

 const selfUser = users.find(user => user._id === lsId);
 const friendUser = users.find(user => user._id === id);
 setUser({selfUser: selfUser.number, friendUser: friendUser.number});

//--- header Chat board user number and image show display
 document.getElementById('chat-board-head').innerHTML = `
 <div class="flex align-items-center h-40">
  <img onclick="classListAdd('chat-board-id','sm-none'), classListRemove('user-box','sm-none')" 
    class="w-24 md-none mx-5 pointer" src="../assets/icons/arrow-back.png">
  <img class="w-30 h-30 round border-1 -aqua-3 mx-8" src="${friendUser?.img}">
  <h3 id="chat-title" class="white">${friendUser.number}</h3>
 </div>`;

 setInterval(()=> {
  displayChatData();
 }, 5000);
}



// Display chat data
function displayChatData(){ 
 const {selfUser, friendUser} = user(0);
 
    fetch(conversationUrl,{
      method: "GET"
   }).then((res) => res.json()).then((conversationDatas)=> {
 const filterConversation = conversationDatas.filter((conversation)=> 
    (conversation.sentUser === selfUser && conversation.receiveUser === friendUser) ||
    (conversation.sentUser === friendUser && conversation.receiveUser === selfUser));

   chatbox.innerHTML = ''; 

   filterConversation.forEach((chats)=> {  
  let status = '';
  if(chats.sentUser == selfUser){ status = 'sent'; }else{ status = 'receive'; }  
 chatbox.innerHTML += `
  <div class="clear-both ${status} p-8 my-3">
   <span class="black-8 fs-18 bold-600 flex-wrap-wrap">${chats.text}<span>
  </div>
   `;
 });
 chatbox.scrollTop = chatbox.scrollHeight;
   });
}


// Textarea resize manage
 const textarea = document.getElementById('textareaId');
  textarea.addEventListener("input", function () {
   this.style.height = "auto";
   this.style.height = this.scrollHeight + "px";
  });

// Live chat management
function liveChatManagement(){
 const textareaValue = textarea.value.trim();
 const {selfUser, friendUser} = user(0);
 
 const datas = {sentUser: selfUser, receiveUser: friendUser, text: textareaValue, date: Date.now()};

 fetch(conversationUrl,{
   method: "POST",
   headers: {'content-type':'application/json'},
   body: JSON.stringify(datas)
 }).then((res) => res.json()).then((data) => {  
     console.log(data);
     
 if(data._id){
   console.log(data._id);
   textarea.value = '';
   textarea.style.height = 'auto';
   displayChatData();
 }  
 });
}








// Registration form Management -------------------------------->
function regitrationFormManage() {
   document.getElementById('reg-form-btn').onclick = () => {
      const inpName = document.getElementById('name');
      const inpNumber = document.getElementById('number');
      const inpPassword = document.getElementById('password');

      const name = inpName.value.trim();
      const number = inpNumber.value.trim();
      const password = inpPassword.value.trim();

      if (name == '' || number == '' || password === '') {
         console.log('Please filup all input field');
         return;
      }

      const userDatas = { name, number, password };

      fetch('http://localhost:3000/user-datas', {
         method: 'GET'
      }).then(res => res.json()).then(datas => {
         const findDatas = datas.find(findData => findData.number === number);

         if (findDatas) {
            console.log('You have already registered');
            return;
         }
         if (!findDatas) {
            //  Post user data Database
            fetch('http://localhost:3000/user-datas', {
               method: "POST",
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(userDatas)
            }).then(res => res.json()).then(datas => {

               localStorage.setItem('slys-messenger-datas', datas.insertedId);
               console.log('Your account Register is Successfully...');

            });
         }// else end

      }); // fetch get end
   }
}
//  regitrationFormManage();

