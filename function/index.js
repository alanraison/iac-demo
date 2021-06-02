export const handler = async () => {
  console.log('Handler called');
  return {
    statusCode: 200,
    body: 'Hello from Lambda!',
  };
}
