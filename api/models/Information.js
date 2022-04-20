/**
 * Information.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    description: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    image: {
      type: 'string',
      defaultsTo: 'images/chat-room.svg',
    },
    topic: {
      type: 'string',
      defaultsTo: 'random',
      isIn: ['random', 'magic', 'games', 'code'],
    },
    // relacion
    owner: {
      model: 'room',
      unique: true,
    },
  },
};
