const db = require('../util/database');
module.exports = class Profile {

    constructor(username, picture, description)
    {
        this.username = username;
        this.picture = picture;
        this.description = description;
    }
    
    static fetchAll()
    {
        return db.execute('SELECT * FROM User_Login.profile ')
    }

    static save(post){
          return db.execute(
            'UPDATE User_Login.profile SET image = ?   WHERE username = ?',
            [post.picture, post.username]
          );
      }

    
}