function validate() {
    var a = document.forms["form"]["name"].value;
	var b = document.forms["form"]["email"].value;
	var c = document.forms["form"]["message"].value;
	
	
    if (a ==""||b==""||c=="") {
        alert("All fields must be filled out");
        return false;
    }
}