#!/bin/bash

# PATH isn't loaded when doing stuff via CodeDeploy, so you need to load
# it at each step of the process for npm to actually work.
source /home/ec2-user/.bash_profile
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
echo $USER

echo "Going into the right directory."
cd /home/ec2-user/ryankrol.co.uk
echo "About to start the app."
pm2 start lib/app.js
echo "Finished starting the app."
pm2 save

curl localhost:3000
echo "Saved the state of pm2."
cd /home/ec2-user
echo "Deleting the repository."
rm -rf ryankrol.co.uk
