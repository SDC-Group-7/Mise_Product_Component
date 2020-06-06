# Start instance
# Run vim awsAppInstanceSetup.bash
# Paste the content from this file
# Save
# Run script: sudo bash awsAppInstanceSetup.bash

sudo yum update -y

sudo yum install git -y

printf "\n\n\n\n"
printf "running 'which git:'\n"
which git
printf "\n\n\n\n"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

printf "\n\n\n\n" && printf "running 'command -v nvm':\n" && command -v nvm && printf "\n\n\n\n"
nvm install v13.12.0

echo "console.log('node is working')" > testNode.js

printf "\n\n\n\n"
printf "running 'testing node:'\n"
node testNode.js
printf "\n\n\n\n"

git clone https://github.com/SDC-Group-7/ProductComponent.git

cd ProductComponent

cp .env.example .env

sudo yum install gcc-c++ -y

npm install

npm run build:prod

echo "REMEMBER TO ADD .env VALUES!!!!"

