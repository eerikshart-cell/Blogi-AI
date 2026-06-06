const fetch = require('node-fetch');

const COUPON_URL = 'https://paykstrt.com/54759/162974';
const API_BASE = 'https://api.blogi.ai/v1';

function callBlogiAI(endpoint) {
  return fetch(`${API_BASE}${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(new Error(`HTTP ${res.status}`));
      return res.json();
    });
}

callBlogiAI('/status')
  .then((data) => console.log('Status:', JSON.stringify(data, null, 2)))
  .catch((err) => console.error('API error:', err.message));

console.log(`Deal page: ${COUPON_URL}`);
