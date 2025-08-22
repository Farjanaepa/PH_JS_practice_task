  function makeYellow(){
            document.body.style.backgroundColor = 'yellow';
        }
        function makered(){
            document.body.style.backgroundColor = 'red';
        }

        // option : 2 

        const btnMakeblue= document.getElementById('btn-make-blue');
        btnMakeblue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

        // option : 3 different version 

        const btnMakepurple = document.getElementById('btn-make-purple');
        btnMakepurple.onclick = makePurple;

        function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }