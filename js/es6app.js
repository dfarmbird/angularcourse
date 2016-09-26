class Character {
  constructor(xCoord,yCoord){
    this.x = xCoord;
    this.y = yCoord;
  }
};


class Monster extends Character {
  constructor(xCoord,yCoord,name){
    super(xCoord,yCoord);
    this.name = name;
    this.health_=100;
  }
  attack(character){
//    super.attack(character);
    this.health_ += 10;
  }
  get isAlive() {
    return this.health_ > 0;
  }
  
  get health() {
    return this.health_;
  }
  
  set health(value){
    if(value < 0 ) throw new Error('You dead! Bitch!');
    this.health_ = value;
  }
}

const myMonster = new Monster(3,4,'Fred');

console.log(myMonster.health);
console.log(myMonster.isAlive);

myMonster.health = 10;

myMonster.attack(new Monster(5,6,'Jeff'));
console.log(myMonster.health);