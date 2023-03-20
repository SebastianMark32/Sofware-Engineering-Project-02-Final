const db = require("../util/database");

module.exports = class Leaderboard{
    constructor(user,classAdd, dormChoice, hamVisit, facilVis, faculCheck ) {
        this.user =user;
        this.classAdd =classAdd;
        this.dormChoice =dormChoice;
        this.hamVisit =hamVisit;
        this.facilVis =facilVis;
        this.faculCheck =faculCheck;
    }
  
      static fetchAll()
      {
          return db.execute('SELECT * FROM leaderboard ')
      }
      
      static update(post){
          return db.execute(`UPDATE leaderboard SET ${post.column} = 1 WHERE id=(?)`,[post.id]);
      }

      static save(post){
          return db.execute(
            'INSERT INTO leaderboard(username,classAdd,dormChoice,hamVisit,facilVis,faculCheck) VALUES(?,?,?,?,?,?)',
              [post.username, post.classAdd, post.dormChoice, post.hamVisit, post.facilVis, post.faculCheck]
          );
      }
  };