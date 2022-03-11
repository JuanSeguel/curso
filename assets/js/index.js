const vue = new Vue({
  el: '#app',
  data: function () {
    // datos
    return {
      idUser: 0,
      text: null,
      chats: [
        {
          name: 'Sala juegos',
          image: 'https://placekitten.com/600/600',
        },
        {
          name: 'Sala adultos',
          image: 'https://placekitten.com/401/400',
        },
      ],
      messages: [
        { text: 'asd', idUser: 0 },
        { text: 'dfg', idUser: 2 },
        { text: 'fgh', idUser: 3 },
        { text: 'oñwieyhr', idUser: 0 },
        { text: 'lsuieyhlushyfg', idUser: 3 },
      ],
    };
  },
  methods: {
    //metodos
  },
});
Vue.config.devtools = true;
