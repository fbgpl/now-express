const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

function generateRandomString(length = 10) {
  const possibleCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let output = '';
  for (let i = 0; i < length; i++) {
    output += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  return output;
}

app.get('/', (req, res) => res.send('Server works fine.'));
app.get('/random-string', (req, res) => res.send(generateRandomString()));

http.listen(port, function () {
  console.log('listening on *:' + port);
});
