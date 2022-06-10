//const _axios = require('axios');
// import Vue from 'vue';
// import axios from 'axios';
// Vue.use(axios);
const vue = new Vue({
  el: '#app',
  created() {
    this.getRooms();
  },
  data: function () {
    // datos
    return {
      // modal
      modalActive: false,
      disableBtn: this.checkName(),
      // room
      name: null,
      description: null,
      image: null,
      topic: null,
      idRoom: null,

      // chat
      idUser: 5,
      text: null,
      rooms: [],
      messages: [
        { text: 'asd', idUser: 1 },
        { text: 'dfg', idUser: 2 },
        { text: 'fgh', idUser: 3 },
        { text: 'oñwieyhr', idUser: 1 },
        { text: 'lsuieyhlushyfg', idUser: 3 },
      ],
    };
  },
  methods: {
    getRooms(){
      axios
      .get('/rooms')
      .then((response) => {
        // console.log(response);
        this.rooms = response.data; //! asi ya funciona
        //! prueba
        // this.chats = response.data.map( chat => ({
        //   idChat: chat.id,
        //   nameChat: chat.name,
        //   image: '' || chat.information.pop().image,
        //   createdAt:chat.createdAt
        // }));
      })
      .catch((error) => {
        console.log(error);
      });
    },
    sendMessage() {
      if (this.text.trim() != (null || '')) {
        this.messages.push({
          text: this.text,
          idUser: this.idUser,
        });
        this.text = null;
      }
    },
    checkName(){
      return this.name === undefined || this.name.trim().length > 0;
    },
    createRoom () {
    //crear sala
      let dataRoom = {
        name: this.name.trim(),
        description: this.description.trim()
      };
      axios.post('/rooms', dataRoom).then(()=>{
        this.getRooms();
        this.modalActive=false;
        this.name = null;
        this.description = null;
      }).catch((error)=>{
        console.log(error);
      });
    },
  },
});
Vue.config.devtools = true;
