/**
 * StaticController
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
   * @loquesea descripcion
   * comentario comun
   */
  // * Controlador para las paginas estaticas de la aplicacion
  index: function (req, res) {
    // sails.log.debug(req);
    res.view('pages/index');
  },
};
