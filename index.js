const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const MEASUREMENT_ID = 'G-DJ5LKLDVW6';

app.get('/', async (req, res) => {
  try {
    const eventData = {
      client_id: '123456',
      events: [
        {
          name: 'homepage_view',
        },
      ],
    };

    await sendEvent(eventData);

    res.send('Event sent to Google Analytics 4!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error sending event to Google Analytics 4');
  }
});

// Function to send an event
async function sendEvent(eventData) {
  try {
    await axios.post(`https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}`, eventData);
    console.log('Event sent successfully');
  } catch (error) {
    console.error('Error sending event:', error.message);
  }
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
