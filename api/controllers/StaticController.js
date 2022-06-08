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
   * @param parametro
   * comentario comun
   */
  // * Controlador para las paginas estaticas de la aplicacion
  index: function (req, res) {
    let modelos = sails.models;
    console.log(modelos);
    res.view('pages/index');
  },
};
