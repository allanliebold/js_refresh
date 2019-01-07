// Game Project Prototype

// Room object constructor
function Room(name, desc, exits) {
  this.name = name;
  this.desc = desc;
  this.exits = exits;
}

function Map(rooms) {
  this.rooms = rooms;
  this.addRoom = function() { };
}

function connectRooms(start, connection, end) {
  start.exits[connection] = end;
}

var firstRoom = Room('First Room', 'This is the first room');
