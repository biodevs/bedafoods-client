# FROM node:9

# # RUN useradd --user-group --create-home --shell /bin/false bedafoods-client

# USER node

# ENV HOME=/home/node


# RUN mkdir $HOME/.npm-global
# WORKDIR $HOME/.npm-global
# ENV PATH=$HOME/.npm-global/bin:$PATH
# ENV NPM_CONFIG_PREFIX=$HOME/.npm-global

# RUN npm config set prefix $NPM_CONFIG_PREFIX

# RUN chown -R $(whoami) $HOME/.npm-global

# RUN npm install -g @angular/cli

# COPY . .

# RUN npm install

# CMD ["npm", "start"]


FROM node:9

ENV INSTALL_PATH /bedafoods-client

RUN npm install -g @angular/cli --unsafe-perm
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install --unsafe-perm
CMD ["npm", "start"]