async function handler() {
  console.log('Handler called');
  return {
    statusCode: 200,
    body: 'Hello from Serverless!',
  };
}

module.exports = { handler };