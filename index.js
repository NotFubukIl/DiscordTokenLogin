var token = "" // Put the token you want to login under the ""

function tokenLogin(token) {
   setInterval(() => localStorage.setItem("token", `"${token}"`), 50)
   setTimeout(() => location.reload(), 500)
}

tokenLogin(token) 
