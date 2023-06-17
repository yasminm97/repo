class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(o) {
        this.xp += obj[o.level];
        console.log(this.xp)
        this.log.push(o.id);
        console.log(this.log)
    }
}
class Challenges {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}
var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}
u1 = new User("JAD", 0, [])
c1 = new Challenges(1, 'VE')
u1.newSolvedChallenge(c1); 
c2 = new Challenges(2, 'EX')
u1.newSolvedChallenge(c2); 