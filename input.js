const KEYS = require('./constants').KEYS;

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') { //CTRL C quits the game
    process.exit();
  } else if (key === KEYS.MOVE_UP_KEY) { //movement keys
    connection.write('Move: up');
  } else if (key === KEYS.MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (key === KEYS.MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (key === KEYS.MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } else if (key === 'j') { //special message sending
    connection.write('Say: HA HA');
  } else if (key === 'k') {
    connection.write('Say: loser');
  } else if (key === 'l') {
    connection.write('Say: SNEK KING');
  } 
};

module.exports = {setupInput};