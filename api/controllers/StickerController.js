/**
 * StickerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const _perPage = 10;

module.exports = {
  //* 200 ok / 201 created / 202 accepted / 204 no content
  // * app/api/rooms?page=1?perPage=10
  list: async function (req, res) {
    let page = Math.abs(req.query.page - 1) || 0;
    let perPage = req.query.perPage || _perPage;

    let stickers = await Sticker.find({
      limit: perPage,
      skip: page,
    }).populate('rooms');

    return res.json(stickers);
  },

  store: async function (req, res) {
    let data = {
      name: req.body.name,
      image: req.body.image,
    };

    let sticker = await Sticker.create(data).fetch();
    return res.status(201).json(sticker);
  },

  attach: async function (req, res) {
    let idRoom = req.params.idRoom;
    let idSticker = req.params.idSticker;
    await Room.addToCollection(idRoom, 'stickers', idSticker);
    return res.status(200).json('Elementos vinculados');
  },
};
