$(document).ready(function(){
    $("#f_nameError").hide();
    $("#l_nameError").hide();
    $("#emailError").hide();
    $("#contactError").hide();
    $("#DOBError").hide();
    $("#genderError").hide();
    $("#interestError").hide();
    $("#OSError").hide();
    $("#emailInvalidError").hide();
    let valid = true;
    $(document).on("submit", "#forms", function(e){
        e.preventDefault();


        let fname = $("#first-name").val().trim();
        if(fname == "" || !/^[a-zA-Z ?\d{50}]*$/.test(fname)){
            valid = false;
            $("#f_nameError").show();
        }else {
            valid = true;
            $("#f_nameError").hide();
        }

        let lname = $("#last-name").val().trim();
        if(lname == "" || !/^[a-zA-Z ?\d{10}]*$/.test(lname)){
            valid = false;
            $("#l_nameError").show();
        } else {
            valid = true;
            $("#l_nameError").hide();
        }

        let email = $("#email").val().trim();

        if(email == "" ){
            valid = false;
            $("#emailError").show();
        }
        else if(!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
            valid = false;
            $("#emailError").hide();
            $("#emailInvalidError").show();
        }
        else {
            valid = true;
            $("#emailError").hide();
            $("#emailInvalidError").hide();
        }


        let mobile = $("#mobile").val().trim();
        if(mobile == "" || !(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(mobile)){
            valid = false;
            $("#contactError").show();

        } else {
            valid = true;
            $("#contactError").hide();
        }

        let dob = $("#dob").val();

        // $.validator.addMethod(
        //     function() {
        //         let currentDate = new Date();
        //         let dobDate = new Date(dob);
        //         return currentDate > dobDate;
        //     },
        //     "You cannot select a date greater than today."
        // );
        let currentDate = new Date();
        if(dob >= currentDate){
            valid = false;
            $("#DOBError").show();
        } else {
            valid = true;
            $("#DOBError").hide();
        }

        if(!$("input[name=gender]:checked").val()){
            valid = false;
            $("#genderError").show();
        } else {
            $("#genderError").hide();
        }

        let os = $("#os");
        if(os.val() == ""){
            valid = false;
            $("#OSError").show();
        } else {
            valid = true;
            $("#OSError").hide();
        }


        let interest_checked_in=$('.interested_in:checked').length;
        if(interest_checked_in == 0){
            valid = false;
            $("#interestError").show();
        } else {
            $("#interestError").hide();
        }

        })

        // if(!valid) {
        //     $("#error-msg").show();
        // } else {
        //     $("#error-msg").hide();

        // }
    });

        // function validateForm(){
        //     let f_name = $("#first-name").val();
        //     let l_name = $("#last-name").val();
        //     let email = $("#email").val();

        //     let isValid = true;
        //     $(".error").hide();

        //     if(f_name == ""){
        //         $("#f_nameError").html("It is a required field").show();
        //         isValid = false;
        //     }

        //     return isValid;
        // }
















    // $(".error").hide();
    // let f_nameError = true;
    // $("#first-name").keyUp(function(){
    //     validatef_name();
    // });
    // function validatef_name(){
    //     let f_nameValue = $("#first-name").val();
    //     if(f_nameValue == ""){
    //         $(".error").show();
    //         f_nameError = false;
    //         return false;
    //     } else {
    //         $(".error").hide();
    //         f_nameError = true;
    //     }
    // }

    // $("#submit").click(function(){
    //     validatef_name();
    //     if(f_nameError){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

