const github = new gitHub();

const ui = new UI();

const search_input = document.querySelector("#searchUser");

search_input.addEventListener("keyup", (e) => {
    // Get input text
    const input_text = e.target.value;

    // Valid 
    if (input_text !== "") {
        github.getUser(input_text).then((user) => {
            if (user.message === "Not found") {
                // show alert
                ui.showAlert(`User: ${input_text} not found`, "alert alert-danger")   
            } else {
                ui.showProfile();
                ui.clearAlert();
            }
            return user;
        })
    }


})