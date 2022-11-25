import Post from "../models/Post.js";
const UserSettings = (req, res) => {
   
        var resname = req.cookies.cookieName;
        res.render('UserSettings.ejs', {
        name:resname,
         
    })  
    
}

export default UserSettings;