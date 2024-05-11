function validation(){
    var name=document.getElementById("Name").value;
    var email=document.getElementById("Email").value;
    var mobile=document.getElementById("Mobile").value;
    var service=document.getElementById("Service").value;
    var cartype=document.getElementById("Cartype").value;
    var carmodel=document.getElementById("Carmodel").value;
    var kilometer=document.getElementById("Kilometer").value;

    name.addEventListener(change,function(event){
        if (event.target.value === "") {
            name.textContent = "Required*";
        } else {
            nameErrMsgEl.textContent = "";
        }
    })
    if(name==""){
        document.getElementById("name").innerHTML="required**";
        document.getElementById("email").innerHTML()
        document.getElementById("mobile").innerHTML()
        document.getElementById("service").innerHTML()
        document.getElementById("cartype").innerHTML()
        document.getElementById("carmodel").innerHTML()
        document.getElementById("kilometer").innerHTML()
        return false;
    }
}