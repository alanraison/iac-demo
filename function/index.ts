export const handler = async () => {
  console.log('CDK Handler Called!');
  return {
    statusCode: 200,
    body: "Hello from CDK!",
  };
}