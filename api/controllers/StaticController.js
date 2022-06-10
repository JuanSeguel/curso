/**
 * StaticController
 *
 * * Controlador para las paginas estaticas de la aplicacion
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * ! peligro
   * * bien!
   * ? pregunta
   * TODO: hacer
   * @param parametro
   * comentario comun
   */
  index: function (req, res) {
    //let modelos = sails.models;
    //console.log(modelos);
    // sails.log.debug(req);
    res.view('pages/index');
  },
};
