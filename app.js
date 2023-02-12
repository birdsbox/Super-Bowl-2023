window.onload=function(){
    
    const button = document.getElementById("submit");
    
      let option1Votes = 0;
      let option2Votes = 0;

    

    button.addEventListener("click", function() {

        //var ele = document.getElementsByName('candidate');
        
        const option1Radio = document.getElementById("candidate1");
        const option2Radio = document.getElementById("candidate2");

        if (option1Radio.checked) {
            option1Votes += 1;

            document.getElementById("option1-bar").style.height = option2Votes * 10 + "px";
            document.getElementById("option1-text").innerHTML = "Option 2: " + option2Votes + " vote(s)";
        }
        else if(option2Radio.checked){
            option2Votes += 1;
            document.getElementById("option2-bar").style.height = option2Votes * 10 + "px";
            document.getElementById("option2-text").innerHTML = "Option 2: " + option2Votes + " vote(s)";
        }

      });
    }