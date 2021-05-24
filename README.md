Serverless Application Model
============================

To apply the template, run

```
aws cloudformation create-stack --stack-name alans-sam-init --template-body file://init.yaml

BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name alans-sam-init --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)

sam build

sam local invoke

sam deploy --stack-name sam --s3-bucket ${BUCKET_NAME} --capabilities CAPABILITY_IAM

FUNCTION=$(aws cloudformation describe-stacks --stack-name sam --query "Stacks[0].Outputs[?OutputKey=='FunctionName'].OutputValue" --output text)

aws lambda invoke --function-name ${FUNCTION} /dev/stderr | cat
```