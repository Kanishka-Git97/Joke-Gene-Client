#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/buyasia/buy-asia/deploy.log

echo 'pm2 restart buy-asia' >> /home/ec2-user/buyasia/buy-asia/deploy.log
sudo pm2 restart buy-asia >> /home/ec2-user/buyasia/buy-asia/deploy.log
sudo pm2 save >> /home/ec2-user/buyasia/buy-asia/deploy.log

