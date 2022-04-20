const vue = new Vue({
  el: '#app',
  data: function () {
    return {
      // modal
      modalActive: true,
      // room
      name: null,
      description: null,
      image: null,
      topic: null,
      idRoom: null,

      // chat
      idUser: 5,
      text: null,
      chats: [
        {
          name: 'Sala juegos',
          image: 'https://placekitten.com/600/600',
          createdAt: new Date().toLocaleString(),
        },
        {
          name: 'Sala adultos',
          image: 'https://placekitten.com/401/400',
          createdAt: new Date().toLocaleString(),
        },
      ],
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
    sendMessage() {
      if (this.text.trim() != (null || '')) {
        this.messages.push({
          text: this.text,
          idUser: this.idUser,
        });
        this.text = null;
      }
    },
    createRoom() {
      alert(this.name);
    },

    //metodos
  },
});
Vue.config.devtools = true;
