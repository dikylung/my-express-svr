FROM node:slim
RUN apt-get update; apt-get upgrade -y
RUN yarn global add nodemon
