const db = require('../util/database');

module.exports = class Event {
  constructor(title, rFreq, rBymonth, rBymonthDay, rByweekDay) {
    this.title = title;
    this.rFreq = rFreq;
    this.rBymonth = rBymonth;
    this.rBymonthDay = rBymonthDay;
    this.rByweekDay = rByweekDay;
  }

    static fetchAll()
    {
        return db.execute('SELECT * FROM User_Login.calendar ')
    }

    static save(post){
        return db.execute(
            'INSERT INTO User_Login.calendar (title, rFreq, rBymonth, rBymonthDay, rByweekDay) VALUES (?, ?, ?, ?, ?)',
            [post.title, post.rFreq, post.rBymonth, post.rBymonthDay, post.rByweekDay]
        );
    }
}