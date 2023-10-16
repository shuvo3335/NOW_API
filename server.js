// server.js
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const laydownRoutes = require('./routes/laydownprog');
// app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/laydownapi', laydownRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
