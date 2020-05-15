### INTRO TO SIMPLE BASH AUTOMATION ###
# this file was called "fullDemo.bash" in my demo.
# You can put arbitrary terminal commands into a file and run them with the 'bash' command.
# You'd run this file with 'bash fullDemo.bash' from the terminal
# This is very useful for automating tedious tasks related to typing multiple commands in the terminal.
# PRO TIP: you can put the command to run this bash script file in the "scripts" in your package.json (see example below):
# "scripts:" {
#   "start": "nodemon index.js",
#   "build:docker": "bash fullDemo.bash"
# }
# You'd then run it with "npm run build:docker"

### USING BASH SCRIPTS WITH DOCKER ###
# delete existing container
docker rm -f product_component
# delete existing image
docker rmi product-component
# build image
docker build -t product-component .
# run a container from the image
docker run -d -p 8000:3002 -v $(pwd):/src/app --name product_component product-component:latest


# execute command inside container (without "going inside" it)
#####docker exec demo npm run seed
# Go into the container to snoop around.
# This is profoundly useful for debugging issues inside your container/image.
#     docker exec -it demo bash
# look for "seedData.txt"
# Add the changes you made inside the container to the image (how awesome is that!)
##### docker commit demo numbers-module
# You can check and see that the seedData.txt file has been added to the image:
######   docker stop demo
######   docker run -d -p 1000:3000 --name demo --rm numbers-module
# If you "snoop" around inside this NEW container, you'll see that the "seedData.txt" file is now a part of the image
# Push new image to docker hub
###### docker tag numbers-module numbers-module
###### docker push jordanstholmes/numbers-module


### META-PROCESS LESSONS LEARNED ###
# 1. Development is sped up significantly when you tighten up the build/test process (make it shorter)
# 2. Debugging blind (aka guessing and checking) is extremely inefficient (there is always a way to gather more information about what EXACTLY is going wrong)