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
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  'GET /': { view: 'pages/homepage' },

  // * Las rutas van en plural por estandarizacion

  // * Rooms
  'get /rooms/': 'RoomController.list',
  'get /rooms/:id': 'RoomController.show',
  'post /rooms': 'RoomController.store',
  'put /rooms/:id': 'RoomController.update',
  'delete /rooms/:id': 'RoomController.destroy',

  // * Information
  'post /rooms/:id/informations': 'InformationController.store',

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

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against 'shadow routes' (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
