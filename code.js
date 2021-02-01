/*
jag har felsökt på följande sätt:
- Skrivit ut värdet i konsolen för att kontrollera att det är rätt.
- Satt breakpoints för att se vad som händer på varje steg.
- Skapat alerts för att se att t.ex. mouseup fungerar som det ska.
*/

var aob = document.getElementById("AmountOfBlogs");
var numbers = [];
var nums = "";


        var posts = [];

        for (i = 0; i < 100; i++){
            var article = document.createElement("article");
            article.id=i;
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            var button = document.createElement("button");
            button.className = "btn btn-light mb-2";
            button.innerText = "Edit";
                button.onclick = function () {
                    Edit(this.parentElement.id);
                };
            h3.innerText = "Lorem ipsum, dolor sit";
            p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae quae fugit dolores placeat suscipit similique, rem sequi deleniti totam quidem doloremque autem. Eligendi maxime quod quas, laudantium esse minus!Impedit obcaecati eveniet ducimus vitae nobis minus dolorum voluptates deserunt amet eos, placeat, nulla deleniti magni, velit veniam aliquid. Rem id optio nam dicta aperiam quos consequuntur neque atque voluptatibus?";
            article.append(button, h3, p);
            article.className = "w-75 m-auto mt-3 mb-5 bg-dark text-light p-4 rounded";
            posts.push(article);
        }


        /* Ändrar knappens text och funktion till Save och Save(), sen tas h3 och p bort för att istället 
        lägga till ett input och textarea så att man kan ändra texten */
        function Edit(id){
            var post = document.getElementById(id);
            post.childNodes[0].innerText = "Save";
            post.className += "row";
            var title = posts[id].childNodes[1].innerText;
            var text = posts[id].childNodes[2].innerText;
            var h3 = document.createElement("input");
            h3.type = "text";
            h3.className = "col-12 mb-3"
            h3.value = title;
            var p = document.createElement("textarea");
            p.value = text;
            p.className = "col-12 height"

            post.childNodes[1].remove();
            post.childNodes[1].remove(); 
            post.append(h3, p);
            post.childNodes[0].onclick = function(){
                var newtitle = post.childNodes[1].value;
                var newtext = post.childNodes[2].value;
                (newtext);
                Save(post, newtext, newtitle, id);
            }
        }
        /*Här ändras knappens funktion och text så att det står edit och Edit() körs så att man kan redigera inlägget igen. Input och textarea byts ut mot h3 och p igen. */
        function Save(post, text, titel, id){
            post.childNodes[1].remove();
            post.childNodes[1].remove();
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            h3.innerText = titel;
            p.innerText = text;
            post.append(h3,p);
            post.childNodes[0].innerText = "Edit";
            post.childNodes[0].onclick = function(){
                Edit(id);
            };
            posts[id] = post;
        }

        /*Efter att användaren ändrat på reglaget uppe i headern så läggs mängden inlägg som den angett till i en section.*/
        function AddPost(amount){
            document.getElementById("bloggs").innerHTML = "";
            for (i = 0; i < amount; i++){
                var element = document.getElementById("bloggs");
                element.appendChild(posts[i]);
            }
        }

        aob.addEventListener("keydown", function(e){
            if(e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 38){
                GetValue();
            }
        });

        aob.addEventListener("mouseup", GetValue);
        
        function GetValue(){
            document.getElementById("value").innerText = aob.value + " inlägg visas";
            AddPost(parseInt(aob.value));
        }

        
