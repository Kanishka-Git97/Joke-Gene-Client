#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/development/Joke-Gene-Client/deploy.log

echo 'cd /home/ec2-user/development' >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
cd /home/ec2-user/development/Joke-Gene-Client/ >> /home/ec2-user/development/Joke-Gene-Client/deploy.log

echo 'npm install' >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
npm i --legacy-peer-deps >> /home/ec2-user/development/Joke-Gene-Client/deploy.log
