/**
 * InformationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // *
  store: async function (req, res) {
    let id = req.params.id;
    let data = {
      description: req.body.description,
      image: req.body.image,
      topic: req.body.topic,
      owner: id,
    };
    // * si no agrego fetch se crea la info, pero no la devuelve
    let information = await Information.create(data);
    return res.status(201).json(information);
  },
};
