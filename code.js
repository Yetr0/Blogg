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
            var title = document.getElementById("title");
            var text = document.getElementById("text");
            var article = document.createElement("article");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            h3.innerText = "Lorem ipsum, dolor sit";
            p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae quae fugit dolores placeat suscipit similique, rem sequi deleniti totam quidem doloremque autem. Eligendi maxime quod quas, laudantium esse minus!Impedit obcaecati eveniet ducimus vitae nobis minus dolorum voluptates deserunt amet eos, placeat, nulla deleniti magni, velit veniam aliquid. Rem id optio nam dicta aperiam quos consequuntur neque atque voluptatibus?";
            article.append(h3, p);
            article.className = "w-50 m-auto mt-3 mb-5 bg-dark text-light p-4 rounded";
            posts.push(article);
        }
            
            console.log(posts);

        function AddPost(amount){
            for (i = 0; i < amount; i++){
                var element = document.getElementById("bloggs");
                element.appendChild(posts[i]);
            }
        }

        function ClearValues( input1, input2){
        input1.value = "";
        input2.value = "";
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

        /*aob.addEventListener("keyup", function(e){
            if(e.keyCode >= 48 && e.keyCode <= 57){
                numbers.push(e.key);
                for(var i = 0; i < numbers.length; i++){
                    if(nums <= 100)
                    {
                        nums += numbers[i];
                    }
                }
                if(nums > 100){
                    nums = 100;
                }
                console.log(nums);
                document.getElementById("value").innerText = nums;
                aob.value = nums;
                console.log(numbers.toString());
                setTimeout(function(){
                    numbers = [];
                    nums = "";
                    console.log(numbers.toString(), nums);
                }, 1000)
            }
        })*/

        
