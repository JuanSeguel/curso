/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
    },
    /*image: {
      type: 'string',
      allowNull: false,
      defaultsTo: 'images/chat-room.svg',
    },*/
    // * relacion uno a uno
    information: {
      collection: 'information',
      via: 'owner',
    },
    // * relacion uno a muchos
    messages: {
      collection: 'message',
      via: 'owner',
    },
    stickers: {
      collection: 'sticker',
      via: 'rooms',
    },
  },

  //datastore: 'default',
};
