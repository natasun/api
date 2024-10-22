const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());  // Enable CORS for all origins (not secure for production)

app.get('/api/nobitex', async (req, res) => {
  try {
    const response = await fetch('https://api.nobitex.ir/v3/orderbook/USDTIRT');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});