/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  store: async function (req, res) {
    let idRoom = req.params.id;
    let data = {
      text: req.body.text,
      owner: idRoom,
    };
    // * si no agrego fetch se crea la info, pero no la devuelve
    let message = await Message.create(data).fetch();
    return res.status(201).json(message);
  },
};
