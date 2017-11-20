FROM node:9.2-alpine

USER node

ENV HOME /home/node
ENV INSTALL_PATH $HOME/bedafoods-client

RUN mkdir -p $INSTALL_PATH

ENV NPM_CONFIG_PREFIX ${HOME}/.npm-global
RUN mkdir -p $NPM_CONFIG_PREFIX
RUN npm config set prefix '${NPM_CONFIG_PREFIX}'

ENV PATH=${NPM_CONFIG_PREFIX}/bin:$PATH

RUN npm install -g @angular/cli

WORKDIR $INSTALL_PATH
COPY . .
RUN npm install 
CMD ["npm", "start"]