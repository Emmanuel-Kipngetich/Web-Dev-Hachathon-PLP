btnEnter.onclick=login;
function login(){
let pin1=document.getElementById('pin1').value;

 if(pin1==1234){
  
  pas.style.display="none";
  btnsSecreen.style.display="block";
  
 
 }
 else{
  pinMsg.innerHTML="**Password not matched";
 
 }
}