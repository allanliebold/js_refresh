// Game Project Prototype

// Room object constructor
function Room(name, desc, exits) {
  this.name = name;
  this.desc = desc;
  this.exits = exits;
}

function Map(rooms) {
  this.rooms = rooms;
}
