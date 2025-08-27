
// update name or something
// set event listener
        document.getElementById('btn-update').addEventListener('click',function(){
            console.log('update button clicked');

            // get the text from input field
            const nameInput = document.getElementById('input-name');
            console.log(nameInput)
            const name = nameInput.value;
            console.log('name', name)


            // set the name
            const namep = document.getElementById('name');
            namep.innerText = name;
        })


        // comment box