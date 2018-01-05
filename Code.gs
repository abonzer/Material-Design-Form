

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Form.html');
}

function publish(body, title, tag, pass){
  var SetPass = "SetYourPa$$word";
  var msg;
   
  var Keywords = '<div style="margin-top:38px;"><p><strong>POSTED IN:&nbsp;</strong><span style="color:#0c588e">  ' + tag + ' </span></p></div>'
  
  if(SetPass == pass){
    
    if(title !== ""){
      
      MailApp.sendEmail({
        to: "yourBlog.your-Direct-Post-Mail-Address@blogger.com",
        subject: title,
        htmlBody: body + Keywords
      });
      msg = "Post Publish on the Blog";
      
    } else {
      msg = "Please Enter the Post Title";
    }     
      
    
  } else {
    msg = "The password is incorrect, Try again";
  }
  
  return msg;

}



function forgotPass(){
  var SetPass = "SetYourPa$$word";
   MailApp.sendEmail({
        to: "XYZmail@gmail.com, abonzerTV@gmail.com",
        subject: "Forgot Password - unexpectedweb.blogspot.com",
     htmlBody: "Here is the Password: " + SetPass
      });
  var msg = "We've sent a password reset link to these email addresses. xyz****@gmail.com, ab****@gmail.com";
  return msg;
}

