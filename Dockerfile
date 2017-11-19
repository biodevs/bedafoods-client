FROM node:9

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV INSTALL_PATH /home/node/bedafoods-client
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

RUN npm install -g @angular/cli

COPY . .
RUN npm install
CMD ["npm", "start"]