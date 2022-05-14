FROM node:12

# create application directory
WORKDIR /usr/src/app

# install dependencies
# the asterisk character ("*") is used to
# copy both files: package.json and package-lock.json
COPY package*.json ./

RUN npm install
# If you are building for production
# RUN npm ci --only=production

# copy source code
COPY . .
CMD [ "node", "counter.js" ]
