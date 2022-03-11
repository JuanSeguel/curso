/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // * Rutas de paginas estaticas
  'get /': 'StaticController.index',

  // * Rooms
  'get /rooms/': 'RoomController.list',
  'get /rooms/:idRoom': 'RoomController.show',
  'post /rooms': 'RoomController.store',
  'put /rooms/:idRoom': 'RoomController.update',
  'delete /rooms/:idRoom': 'RoomController.destroy',

  // * Information
  'post /rooms/:idRoom/informations': 'InformationController.store',

  // * Mensajes
  'post /rooms/:idRoom/messages': 'MessageController.store',

  // * stickers
  'get /stickers/': 'StickerController.list',
  'post /stickers': 'StickerController.store',
  'post /room/:idRoom/stickers/:idSticker': 'StickerController.attach',

  // * Ejemplos de ruteo
  /*
  'GET /ejemplo': function(req, res){
    return res.json( { message:'ok' } )
  }
  'GET /ejemplo': {
    view: '',
    fn: function(req, res){
      return res.json( { message:'ok' } )
    },
    controller: '',
    action: '',
    'Controller.action'
  },
  'GET /controller': {
    controller: 'Default',
    action: 'test',
  },
  'GET /controller': 'DefaultController.test', // * version abreviada de lo anterior
  'GET /metodo/:id': 'DefaultController.metodo', // * version anterior con parametros
  */
};
