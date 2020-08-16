#!/bin/bash    

PROJECT_FOLDER_NAME="kumoro-exports-angular"
KEY_PATH="/atools/aws_resources/monika/kumoro.pem"
AWS_IP="ec2-13-233-89-111.ap-south-1.compute.amazonaws.com"

ng build --prod
cp .htaccess dist/$PROJECT_FOLDER_NAME /.htaccess
cd dist/
zip -r a.zip $PROJECT_FOLDER_NAME/
curl --insecure -v -k --key $KEY_PATH sftp://ubuntu@$AWS_IP/var/www/html/a.zip -T a.zip
ssh -i $KEY_PATH ubuntu@$AWS_IP 'cd /var/www/html/;unzip -q -o a.zip;cd kumoro-exports-angular;mv * ../;'
cd ..
curl --insecure -v -k --key $KEY_PATH sftp://ubuntu@$AWS_IP/var/www/html/.htaccess -T .htaccess
