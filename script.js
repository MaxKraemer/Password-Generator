function getPassword(){

    let chars = "0123456789sbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!§$%&()_+-<>:;{}"; //password marks
    let passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+ 1);
        
    }
    document.getElementById("password").value = password; 
}

