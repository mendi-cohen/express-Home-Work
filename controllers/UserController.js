class Controllers {

    getUser (req, res) {
            res.json({ 
                massege: "hello im user !! "
        });
        }

        addUser (req, res){
            res.json({ 
                massege: "hello im the part of add for example"
        });
        }
    
}

module.exports = new Controllers