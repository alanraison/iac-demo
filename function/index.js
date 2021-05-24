async function handler() {
  console.log('Handler called');
  return {
    statusCode: 200,
    body: 'Hello from Lambda!',
  };
}

module.exports = { handler };