FROM node:8.9.1

COPY ./package.json /app/package.json
WORKDIR /app

RUN npm install -g yarn
RUN yarn install
# RUN serve -p 3000 -s ./dist

# EXPOSE 5688:3000

# ENV PORT 80

# CMD ["serve","-p","3000", "-s" ,"./dist"]
# CMD ["yarn", "start"]
