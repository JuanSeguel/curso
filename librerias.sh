#!/bin/bash
# Reinstala todas las librerias con las ultimas versiones para el framework Sails
npm uninstall
  @sailshq/connect-redis
  @sailshq/lodash
  @sailshq/socket.io-redis
  @sailshq/upgrade
  grunt
  lodash
  sails
  sails-hook-grunt
  sails-hook-orm
  sails-hook-sockets
  sails-mongo
  sails-mysql &&
npm i --save
  @sailshq/connect-redis
  @sailshq/lodash
  @sailshq/socket.io-redis
  @sailshq/upgrade
  grunt
  lodash
  sails
  sails-hook-grunt
  sails-hook-orm
  sails-hook-sockets
  sails-mongo
  sails-mysql

