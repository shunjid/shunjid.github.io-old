$(function(){$("#contact-form").submit(function(t){t.preventDefault(),$("#submit-contact-form").attr("disabled",!0),$("#submit-contact-form").prop("value","Sending message");let a={name:$("#name").val(),email:$("#email").val(),message:$("#message").val()};a=JSON.stringify(a);let e=window.location.href;$.post("https://cuntato.herokuapp.com/api/project-data",{data:a,projectID:"mb8vvzrkzh",currentURL:e},function(){}).done(t=>{$("#submit-contact-form").attr("disabled",!1),$("#submit-contact-form").prop("value","Submit"),M.toast({html:"Message sent successfully"})}).fail(()=>{$("#submit-contact-form").attr("disabled",!1),$("#submit-contact-form").prop("value","Submit"),M.toast({html:"Something went wrong!"})})})});