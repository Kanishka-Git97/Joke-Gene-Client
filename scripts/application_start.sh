#!/bin/bash
BUILD_DESTINATION="/home/ec2-user/production/client"


echo 'run application_start.sh: ' >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
echo 'Building the application...'
cd /home/ec2-user/development/Joke-Gene-Client
npm run build >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
BUILD_FOLDER="/home/ec2-user/development/Joke-Gene-Client/build"
if[-d "$BUILD_FOLDER"]; then
   echo "Build successful! Moving the build folder to $BUILD_DESTINATION..."
   sudo mv "$BUILD_FOLDER" "$BUILD_DESTINATION"

   echo 'pm2 restart client' >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
   sudo pm2 restart client >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
   sudo pm2 save >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
else
   echo "Build failed! Please check the build logs for errors."
fi

