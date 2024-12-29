const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:5173',     // Local development
    'https://french.gregorion.net' // Production domain
  ],
  methods: ['GET', 'POST'],
  credentials: true
})); 