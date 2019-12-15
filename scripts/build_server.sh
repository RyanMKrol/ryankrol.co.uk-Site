#!/bin/bash

# PATH isn't loaded when doing stuff via CodeDeploy, so you need to load
# it at each step of the process for npm to actually work.
source /home/ec2-user/.bash_profile
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /home/ec2-user/ryankrol.co.uk
npm install
npm run build
