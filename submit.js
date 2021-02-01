var posts = [];
var element = document.getElementById("bloggs");

function Submit(){
    var post = new Object();
    var title = document.getElementById("title");
    var text = document.getElementById("text");
    post.Title = title.value;
    post.Text = text.value;
    posts.push(post);
    console.log(posts);
    AddPost(post.Title, post.Text);
    ClearValues(title,text);
}

function AddPost(title, text){
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