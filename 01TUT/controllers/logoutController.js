const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');


const handleLogout = async (req,res) => {
    // On client, also delete the accessToken
    
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204);// No content
    const refreshToken = cookies.jwt;
    
    // Is refresh Token in DB?.
    const foundUser = userDB.users.find(person => person.username === user);
    if(!foundUser) {
    res.clearCookies('jwt',{httpOnly:true});
    return res.sendStatus(204); //unauthorized
    }
    
    // Delete refreshToken in DB.
   const otherUsers = userDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
   const currentUser = {...foundUser,refreshToken: ''};
   userDB.setUsers({...otherUsers,currentUser});
   await fsPromises.writeFile(
    path.join(__dirname, '..','model', 'users.json'),
    JSON.stringify(userDB.users)
   );
   res.clearCookies('jwt',{httpOnly:true}); //secure: true - only server on https
   res.sendStatus(204);
}

module.exports = {handleLogout};