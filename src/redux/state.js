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
  }
}
let rerenderEntireTree = () => {
  console.log('State was changed');
}

let state = {
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
}
window.state=state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; //Паттерн наблюдатель Observer
}

export default state;

// store - OOP