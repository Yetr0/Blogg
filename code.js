var aob = document.getElementById("AmountOfBlogs");
var numbers = [];
var nums = "";

        aob.addEventListener("keydown", function(e){
            if(e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 38){
                GetValue();
            }
        });

        aob.addEventListener("mouseup", GetValue);
        
        function GetValue(){
            document.getElementById("value").innerText = aob.value;
        }

        aob.addEventListener("keyup", function(e){
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
        })

        
