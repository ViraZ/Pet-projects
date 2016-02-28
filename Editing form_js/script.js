window.onload = function(){
 document.forms.buttons.edit.onclick =function(){
  document.getElementById("edit_html").style.display="block";
  document.getElementById("edit_style").style.display="none";
  document.forms.edit_html.text.value=document.getElementById("content").innerHTML;
 }
 document.forms.buttons.stylize.onclick=function(){
  document.getElementById("edit_style").style.display="block";
  document.getElementById("edit_html").style.display="none";
}
document.forms.edit_html.save.onclick=function(){
document.getElementById("content").innerHTML=document.forms.edit_html.text.value;
}









}