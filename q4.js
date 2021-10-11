    
    var userlist = [];
    const form = document.forms[0];

    function validations (name,email)  {

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const letters = /^[A-Za-z]+$/;

         let is_valid = true;

        if(!email.value.match(mailformat))
        {
            document.getElementById("emailError").innerHTML = "Please enter valid Email..";
            is_valid = false;
        }

        if(!name.value.match(letters))
        {
            document.getElementById("nameError").innerHTML = "Please enter character or numbers..";
            is_valid = false;
        }
        return is_valid;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();
        const { name, email } = this.elements;
        if(validations(name,email)){
            let new_obj = {
                "name"  : name.value,
                "email" : email.value,
                "time"  : new Date()
            };
            userlist.push(new_obj);
        }
    });

   function showUsersDetails() {

        const length = userlist.length;
        let table = `<table border="1">
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Time </th>
                    </tr>`;

        if(length > 0) {
            for(let i=0; i<length; i++)
            {
                table +=`<tr>
                            <td> ${userlist[i].name} </td>
                            <td> ${userlist[i].email} </td>
                            <td> ${userlist[i].time} </td>
                        </tr>`;
            }
        } else{
            table +=`<tr >
                        <td colspan="3"> No Users</td>
                    </tr>`;
        }
        
        table += `</table>`;
        document.getElementById("userlist").innerHTML = table;
    }

