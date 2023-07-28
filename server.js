const path = require('path');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello from Pizza Express!')
})

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))
