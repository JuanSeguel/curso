const vue = new Vue({
  el: '#app',
  data: function () {
    // datos
    return {
      idUser: 1,
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
      this.messages.push({
        text: this.text,
        idUser: this.idUser,
      });
      this.text = null;
    },
  },
});
Vue.config.devtools = true;
