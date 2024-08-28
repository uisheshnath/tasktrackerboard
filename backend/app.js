const express = require("express") 
const cors = require('cors') 
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")  
let port=4000
const userRout = require("./router/userRouter")
const app = express()
app.use(express.json()) 
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}
))
app.use(cookieParser())


// for register
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authorised" })
  }
  else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okey" })
      }
      else {
        req.payload = decoded.payload; 
        next()
      }
    })
  }
}

app.get('/api', verifyUser, (req, res) => {
  return res.json({ Status: "Success", payload: req.payload })
})


app.use(userRout)


 
app.listen(port, (req, res) => {
  console.log("sucessful", port)

})


// find file exist or not





