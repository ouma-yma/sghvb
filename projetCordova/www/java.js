$(document).ready(function(){
});

$(document).on("pagecontainerbeforechange",function(ev,ui){
    //pour activer les dom de la page register(page ili aandha il id sigform)
    if(ui.toPage[0].id === "login"){
      if(sessionStorage.isLogin){
        window.location.replace("student.html");
        ev.preventDefault();
      }
    }
  });

function store(){
  var name = document.getElementById('regusername');
  var pw = document.getElementById('regpassword');
  var pwconf = document.getElementById('confpassword');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  if(name.value.length == 0){
    
     document.getElementById("blankMsg").innerHTML = "*Please fill in name not same";

  }else if(pw.value.length == 0){
   
     document.getElementById("message1").innerHTML = "*Please fill in password";


  }else if(name.value.length == 0 && pw.value.length == 0){
    
    alert('Please fill in name and password');
     
  }else if(pw.value.length >13){
      
    document.getElementById("message1").innerHTML = "*Max of 8";

  }else if(!pw.value.match(numbers)){
     
    document.getElementById("message1").innerHTML = "*please add one number";

  }else if(!pw.value.match(upperCaseLetters)){
      
    document.getElementById("message1").innerHTML = "*please add one uppercase letter";
  
  }else if(!pw.value.match(lowerCaseLetters)){
    
    document.getElementById("message1").innerHTML = "*please add one lovercase letter ";
  
  }else if(pwconf.value.length == 0 && pw != pwconf){
     
    document.getElementById("message2").innerHTML = "*please confirm password";
  
  }else if(name.value.length == 0 && pw.value.length == 0 && pwconf.value.length == 0){
      
    document.getElementById("message3").innerHTML = "*please fill in email and password ";

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      window.location.replace("student.html");
      sessionStorage.isLogin="true"
    
  }
}

//checking
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('username');
  var userPw = document.getElementById('password');
  if(userName.value == storedName && userPw.value == storedPw){
    window.location.replace("student.html");
    sessionStorage.isLogin="true"
  }
  else if(userName.value == "admin" && userPw.value == "Admin123"){
    window.location.replace("admin.html");
    sessionStorage.isLogin="true"
  }else{
    sessionStorage.isLogin="false"
  }
}