#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/buyasia/buy-asia/deploy.log

echo 'cd /home/ec2-user/buy-asia' >> /home/ec2-user/buyasia/buy-asia/deploy.log
cd /home/ec2-user/buyasia/buy-asia >> /home/ec2-user/buyasia/buy-asia/deploy.log

echo 'npm install' >> /home/ec2-user/buyasia/buy-asia/deploy.log 
npm i --legacy-peer-deps >> /home/ec2-user/buyasia/buy-asia/deploy.log
