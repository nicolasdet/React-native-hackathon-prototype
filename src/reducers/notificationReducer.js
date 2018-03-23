import { NOTIF_INIT, NOTIF_INIT_NOTIF, CHANGE_CHAT, VOCAL, CHANGE_CHATDOUBLE } from '../actions';
import {
  ToastAndroid,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const INITIAL_STATE = {
  reponses: [],
  token: 'nicolas',
  userMsgVocal: '',
  message: 'Demande a cookit ce que tu veut',
  chat: [ { _id: 1,  text: 'Bonjour !', createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), user: {
            _id: 2,
            name: 'C'
          }, },
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) 
  {
    case NOTIF_INIT: 
    {
      const token = action.payload;

      return { ...state, token: token };
    }
    case NOTIF_INIT_NOTIF:
    {
      const notif = action.payload;
      const message = { _id: 1,  text: notif, createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), user: {
            _id: 2,
            name: 'User'
          }, };


      return { ...state, message: notif, chat: [message] };
      return;
    }
    case CHANGE_CHAT: {

        var newState =  GiftedChat.append(state.chat, action.payload[0]);
        return { ...state, chat: newState };

    }  
    case CHANGE_CHATDOUBLE: {

        var newStatex =  GiftedChat.append(state.chat, action.payload);
        const token = JSON.stringify(newStatex);
        return { ...state, chat: newStatex, token: token };

    } 
    case VOCAL: {

      const NewuserMsgVocal = action.payload;
      return { ...state, userMsgVocal: NewuserMsgVocal  };
    }
    default:
      return state;

  }
};
