const ua = require('universal-analytics');

const tracker = ua('YOUR_TRACKING_ID');

// Send an event
tracker.event('Category', 'Action', 'Label', 'Value', (err) => {
  if (err) {
    console.error('Error sending event:', err);
  } else {
    console.log('Event sent successfully!');
  }
});
