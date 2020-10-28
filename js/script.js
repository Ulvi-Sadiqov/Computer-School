
function SignIn (){
    let name = prompt("Enter your Name");
let mail = prompt("Enter your Email");
let password = prompt("Enter your Email Password");
document.getElementById("name").innerHTML="Dear"+" "+name;
if(name == null){
  document.getElementById("name").innerHTML="  ";
}
}




function NewAccount(){
    alert("Account yaradildi");
    alert("Email:213421@computer.edu.com");
    alert("Password: 671345");
    alert("Group:1")
}

function Call(){
    confirm("Call +3202");
    alert(
      "nomre mesguldu!! . 3-4 deq gozleyin"
    )
}




  function Windows() {
    let windows = window.open("setting.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=400,width=500,height=400");
    myWindow.document.write();
  }

  function mail(){
      prompt("Enter Your Message","");
      alert("sending!");
  }

  function like(){
     document.getElementById("like").style.color="blue";
  }
  function dislike(){
    document.getElementById("dislike").style.color="blue";
 }




 function join() {
  let windows = window.open("join.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=400,width=500,height=400");
  myWindow.document.write();
}

