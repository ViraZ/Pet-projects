$(document).ready(function(){
	$.validator.setDefaults({
  		debug: true,
  		success: "valid"
	});

	$.validator.addMethod("regex", function(value, element, regexpr){          
		return regexpr.test(value);
	}, "Введіть правильно дані.");

		$("form").validate({
		    rules: {
		        name: {
		       	required: true,
	            regex: /^[A-Za-z]{2,30}[A-Za-z]{3,20}$/,
	  	        },
		        email: {
		            required: true,
		            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
		        },
		        phone: {
		        	required: true,
		        	regex: /^[0-9-+]+$/,
		        }, 
		        age: {
		        	required: true,
		        	regex: /^[1-9]?[0-9]{1}$|^100$/,
		        },
		    },
		});
	$('#button-send').prop('disabled', 'disabled');
		$('input').on('blur keyup', function() {
    		if ($("form").valid()) {
        	$('#button-send').prop('disabled', false);  
    	} else {
       	 	$('#button-send').prop('disabled', 'disabled');
    }
});


});