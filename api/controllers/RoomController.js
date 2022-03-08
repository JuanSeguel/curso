/**
 * RoomController
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

    let rooms = await Room.find({
      limit: perPage,
      skip: page,
    });

    return res.json(rooms);
  },

  show: async function (req, res) {
    let data = {
      id: req.body.id,
    };
    let room = await Room.findOne(data);
    return res.status(200).json(room);
  },

  store: async function (req, res) {
    let data = {
      name: req.body.name,
    };

    let room = await Room.create(data).fetch();
    return res.status(201).json(room);
  },

  update: async function (req, res) {
    let id = req.params.id;
    let data = {
      name: req.body.name,
    };
    let room = await Room.findOne({ id: id });
    return res.status(201).json(room);
  },

  destroy: async function (req, res) {
    let id = req.params.id;
    let room = await Room.destroyOne({ id: id });
    return res.json(room);
    // * archive hace un borrado logico
    // * destroy borra todos los que coincidan con el criterio
  },
};
