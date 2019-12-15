#!/bin/bash

# PATH isn't loaded when doing stuff via CodeDeploy, so you need to load
# it at each step of the process for npm to actually work.
source /home/ec2-user/.bash_profile

npm run start
