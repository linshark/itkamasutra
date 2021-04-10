let store={
  _state : {
    profilePage: {
      posts: [
          {id:1, message: 'Hi, how are you?', likesCount:12},
          {id:2, message: 'It\'s my first posts', likesCount:11},
          {id:3, message: 'Hi, how are you?', likesCount:14},
          {id:4, message: 'Hi, how are you?', likesCount:16}
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      messages: [
          {id:1, message: 'Hi'},
          {id:2, message: 'How is your it-kamasutra?'},
          {id:3, message: 'Yo'},
          {id:4, message: 'Yo'},
          {id:5, message: 'Yo'}
      ],
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
      ]
    },
    sidebar:{}
  },
  getState(){
    return this._state;
  },
  _callSubscriber(){
    console.log('State was changed');
  },
  addPost(){
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer){
    this._callSubscriber = observer; //Паттерн наблюдатель Observer
  }
}
export default store;
window.store=store;
// store - OOP