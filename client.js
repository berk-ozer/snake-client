const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: "172.46.0.236",
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log(data);
  })

  return conn;
};

module.exports = { connect };