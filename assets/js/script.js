let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let body = document.getElementById("body");
for ( let item in languages ){
body.innerHTML = body.innerHTML  + " "  + languages[item] ;
}