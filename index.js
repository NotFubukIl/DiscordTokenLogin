var token = "" // Put the token you want to log IN under the ""

function tokenLogin(token) {
   setInterval(() => localStorage.setItem("token", `"${token}"`), 50)
   setTimeout(() => location.reload(), 500)
}

tokenLogin(token) 
