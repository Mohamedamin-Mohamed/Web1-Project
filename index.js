let form = document.querySelector("form");
        form.addEventListener("submit", (event)=>{
           // event.preventDefault();
            let myFormData = new FormData(form);
            let data = Object.fromEntries(myFormData.entries());

            const firstNameSlice = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase();
            const lastNameSlice = data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1).toLowerCase();

            alert("Thank you " + firstNameSlice + " " + lastNameSlice+ " for your comment" + ", i'll reply your comment to your email [" + data.email + "]");
        })
        let body = document.getElementsByTagName("body");
        body.style.backgroundColor = "blue";
