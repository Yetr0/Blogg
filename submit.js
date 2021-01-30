var posts = [];
var element = document.getElementById("bloggs");

function Submit(){
    var post = new Object();
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    post.Title = title;
    post.Text = text;
    posts.push(post);
    ClearValues(title,text);
    console.log(posts);
    AddPost(title, text);
}

function AddPost(title, text){
    alert
    var article = document.createElement("article");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    h3.innerText = title;
    p.innerText = text;
    article.append(h3, p);
    element.appendChild(article);
}

function ClearValues( input1, input2){
 input1.value = "";
 input2.value = "";
}