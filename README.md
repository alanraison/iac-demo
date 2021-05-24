cloudformation
==============

To apply the template, run

```
aws cloudformation create-stack --stack-name alans-init-stack --template-body file://init.yaml

aws cloudformation describe-stacks --stack-name alans-init-stack --query "Stacks[0].Outputs"

BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name alans-init-stack --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)

zip -r function function

aws s3 cp function.zip s3://${BUCKET_NAME}

VERSION=$(aws s3api list-object-versions --bucket ${BUCKET_NAME} --query "Versions[?Key=='function.zip' && IsLatest].VersionId" --output text)

aws cloudformation create-stack --stack-name alans-test-stack --template-body file://template.yaml --parameters ParameterKey=BucketName,ParameterValue=${BUCKET_NAME} ParameterKey=S3Version,ParameterValue=${VERSION} --capabilities CAPABILITY_IAM
```