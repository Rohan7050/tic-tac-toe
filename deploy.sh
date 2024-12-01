# #!/bin/bash

# # Check if the required environment variables are set
# if [ -z "$AWS_ACCESS_KEY" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ] || [ -z "$S3_BUCKET" ]; then
#     echo "Error: AWS credentials or S3 bucket name are not set."
#     exit 1
# fi

# # Path to the build file to upload
# BUILD_FILE="build.zip"

# # Check if the build file exists
# if [ ! -f "$BUILD_FILE" ]; then
#     echo "Error: Build file $BUILD_FILE not found."
#     exit 1
# fi

# # Configure AWS CLI with the provided credentials
# aws configure set aws_access_key_id "$AWS_ACCESS_KEY"
# aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY"

# # Upload the build file to the specified S3 bucket
# echo "Uploading $BUILD_FILE to s3://$S3_BUCKET/"

# aws s3 cp "$BUILD_FILE" "s3://$S3_BUCKET/$BUILD_FILE"

# if [ $? -eq 0 ]; then
#     echo "Successfully uploaded $BUILD_FILE to s3://$S3_BUCKET/"
# else
#     echo "Error uploading $BUILD_FILE to S3."
#     exit 1
# fi
