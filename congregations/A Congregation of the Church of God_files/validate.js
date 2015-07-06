function validate() {
	var errorMessage = "Please complete the following fields: ";
	
	if (document.getElementById("html_mail_form").Your_Name.value=="") {
	errorMessage = errorMessage + " [ Your Name ] ";
	}	
	if (document.getElementById("html_mail_form").Phone.value=="") {
	errorMessage = errorMessage + " [ Phone ] ";
	}	
	if (document.getElementById("html_mail_form").Email_Address.value=="") {
	errorMessage = errorMessage + " [ Email Address ] ";
	}	
	if (document.getElementById("html_mail_form").Mailing_Address.value=="") {
	errorMessage = errorMessage + " [ Mailing Address ] ";
	}	
	if (document.getElementById("html_mail_form").City.value=="") {
	errorMessage = errorMessage + " [ City ] ";
	}	
	if (document.getElementById("html_mail_form").State.value=="") {
	errorMessage = errorMessage + " [ State ] ";
	}	
	if (document.getElementById("html_mail_form").Zip_Code.value=="") {
	errorMessage = errorMessage + " [ Zip Code ] ";
	}
	
	if (errorMessage == "Please complete the following fields: ") {
	document.getElementById("html_mail_form").submit();
	}
	
	else {
	alert(errorMessage);
	return false;
	   }
	}
