const vue = new Vue({
  el: '#app',
  created() {
    this.getRooms();
  },
  data: function () {
    // datos
    return {
      idUser: 1,
      text: null,
      chats: [],
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
        this.chats = response.data; //! asi ya funciona
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
      let texto = this.text.trim();
      if (texto !== null && texto !== '') {
        this.messages.push({
          text: texto,
          idUser: this.idUser,
        });
        this.text = null;
      }
    },
    createRoom () {
    //crear sala
      let dataRoom = {
        name: this.name
      };
      axios.post('/room', dataRoom).then((res)=>{
        console.log(res);

      }).catch((error)=>{
        console.log(error);
      });
      //crear informacion

    },
  },
});
Vue.config.devtools = true;
