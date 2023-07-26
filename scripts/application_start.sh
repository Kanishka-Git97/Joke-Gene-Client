#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/development/Joke-Gebe-Client/deploy.log

echo 'pm2 restart client' >> /home/ec2-user/development/Joke-Gebe-Client/deploy.log
sudo pm2 restart client >> /home/ec2-user/development/Joke-Gebe-Client/deploy.log
sudo pm2 save >> /home/ec2-user/development/Joke-Gebe-Client/deploy.log

