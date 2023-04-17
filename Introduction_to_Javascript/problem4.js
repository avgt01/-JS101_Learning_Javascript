let stored_username = "abd";
let stored_password = "123";

let input_username = "abc";
let input_password = "129";

if(stored_username==input_username){

  if(stored_password==input_password){
    console.log("you can login");
  }
  else{
    console.log("check your password");
  }
}
else{
  console.log("you can't login as you entered incorrect username");
}