$(document).ready(function() {
	$("#username").after("<span >The username field must contain only letters</span>");
	
	$("#password").after("<span >The password field should be at least 8 characters long</span>");
	$("#email").after("<span>The email address field should contain a @ character</span>");
	
	$("span").hide();

	$('#username').focus('input', function() {
	$( this ).next( "span" ).text("The username field must contain only letters").show().addClass("info");
});

  	$('#password').focus('input', function() {
	$( this ).next( "span" ).text("The password field should be at least 8 characters long").show().addClass("info");
});

  $('#email').focus('input', function() {
	$( this ).next( "span" ).text("The email address field should contain a @ character").show().addClass("info");
});


    $('#username').blur('input', function() {
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");
    $( this ).next( "span" ).removeClass("ok");
    $( this ).next( "span" ).removeClass("error");

	var input=$(this);
	var u_name=input.val();
	var str=/^[a-zA-Z]+$/;
	if(u_name.match(str)){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
		
	}
	else if(!u_name){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error");
		
	}
});

    $('#password').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    
    $( this ).next( "span" ).removeClass("ok");
    $( this ).next( "span" ).removeClass("error");
	var input=$(this);
	var u_name=input.val();
	if(u_name.length > 7){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
	}
	else if(!u_name){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error");
	}
});

    $('#email').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    
    $( this ).next( "span" ).removeClass("ok");
    $( this ).next( "span" ).removeClass("error");
	var input=$(this);
	var u_name=input.val();
	if(u_name.indexOf("@")!= -1){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
	}
	else if(!u_name){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error")
	}
});

   
});
