const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
module.exports = function(app) {
    app.post("/user/login", bodyParserMiddleware, (req, res) => {
        console.log(req.body);
        res.send("post")
    })
}