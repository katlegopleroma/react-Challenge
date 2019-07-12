function validate()
{
	var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var username = "joker@zaio.io";
	var password = "zaiojoke";

 if (un == username && pw == password)
	{
		window.location = "joke.html";
        alert("Login was successful");
		return false;
	}

	else
	{   alert("wrong passowrd or email");
		document.login.username.value= "";
        document.login.username.placeholder="check your email or password";
		document.login.password.value = " ";
		return true;
	}
}