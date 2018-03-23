import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { InitToken, InitNotif, changeChat, newVocal, changeChatdouble } from '../actions';
import { Input, Button } from 'react-native-elements';
import Dialogflow from "react-native-dialogflow";
import { GiftedChat } from 'react-native-gifted-chat';
import Tts from 'react-native-tts';
var PushNotification = require('react-native-push-notification');

 class Home extends Component<Props> {

  state = {
    text: '',
    firstVoice: true,
    display: false,
    num: 0,
    reelNum: 0,
    quiz: false,
    messages: [  { _id: 1,  text: 'Bonjour !', createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), user: {
            _id: 2,
            name: 'C'
          }, },
     ]
  }

  componentWillMount() {

   var _this = this;

    PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        _this.props.InitToken(token.token);
    },
    // (required) Called when a remote or local notification is opened or received
   onNotification: function(notification) {
      setTimeout(() => {
        if(!notification['foreground']){
          _this.props.InitNotif(notification['message']);
        }
      }, 1);
      PushNotification.localNotificationSchedule({
        title: 'Notification with my name',
        message: notification['name'], // (required)
        date: new Date(Date.now()) // in 60 secs
      });
},
    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "31994355190",
});

   Dialogflow.setConfiguration(
          "2c3d4cbd4b6c45c3afcb2f3e57c94ec9", Dialogflow.LANG_FRENCH
        );
  }

  onSend(messages)
  {
     this.props.newVocal(JSON.stringify(messages));
     this.props.changeChat(messages);
  }

  boutonVocal(){
    this.setState({ reelNum: this.state.reelNum + 1});

    Dialogflow.startListening(result=>{
      this.setState({ num: this.state.num + 1});
      if(this.state.num > this.state.reelNum )
          {
            this.setState({ reelNum: 0});
            this.setState({ num: 0});
             return;
          }
          this.props.InitToken(JSON.stringify(result));
          this.props.newVocal(result.result.resolvedQuery);
          msgVocal = result.result.resolvedQuery;
          msgReponse = result.result.fulfillment.speech;
          randomUn = (Math.random() * 10000) % 10000;
          randomDeux = (Math.random() * 10000) % 10000;

          messageArray =[{"text": msgVocal, "user":{"_id":1},"createdAt": new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), "_id": randomUn }];
          messageReponse =[{"text": msgReponse, "user":{"_id":2},"createdAt": new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), "_id": randomDeux }];
          this.props.changeChat([messageArray, messageReponse]);
          this.props.changeChatdouble(messageReponse);

          Tts.speak(messageReponse[0].text);

                reponseVocal = result.result.fulfillment.speech;

          }, error=>{
              this.props.InitToken(error);
          });
  }

  tokendisplay(){
    if(this.state.display == true){
      return (
        <TextInput
          value={this.props.token}
          editable = {true}
          maxLength = {4000}
        />
      );
    }
    return;
  }
  tokendisplaybtn() {
    if(this.state.display == false){
      this.setState({ display: true});
      return;
    }
      this.setState({ display: false});
      return;
  }

  componentDidMount()
  {
    if(this.state.firstVoice == true)
    {
        Tts.speak(this.props.chat[0].text);
        this.setState({ firstVoice: false });
    }
  }

  render() {
    return (
<View style={styles.container}>
<View style={styles.TitleContainerStyle}>
    <TouchableOpacity   onPress={() => {this.tokendisplaybtn()}} >
        <Text style={styles.TextTitleStyle}> COOKIT </Text>
    </TouchableOpacity>
</View>
<View style={{ flex: 1}} >
<Text style={{color: 'white'}} > ------------------------------------------------------------------------------------------------ </Text>
   <View style={{  justifyContent:  'center', alignItems: 'center'  }} >
    {this.tokendisplay()}
        <TouchableOpacity style={{ justifyContent: 'center', alignItems:  'center' , width: '20%'}}  onPress={() => {this.boutonVocal()}} >
           <Image source={require('../../assets/Micro.png')} style={{ width: 100 , height: 100, resizeMode:'contain', justifyContent: 'center', alignItems:  'center'}}  />
        </TouchableOpacity>
        <Text>Appuis sur le micro avant de parler</Text>
    </View>
    <View style={styles.ChatStyle}>
       <GiftedChat
        messages={this.props.chat}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      </View>
      <View style={{ paddingBottom: '1%'}}> 
</View>
</View>  
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  TextTitleStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif' 
  },
  TitleContainerStyle: {
    width: '100%',
    backgroundColor: '#FA7601',
    justifyContent: 'center',
    alignItems: 'center'   
  },
  ChatStyle: {
    paddingTop: '10%',
    flex: 1
  }
});

const mapStateToProps = ({ notif }) => {
  const { token, message, chat, userMsgVocal, changeChatdouble } = notif;
  return { token, message, chat, userMsgVocal, changeChatdouble };
};


export default connect(mapStateToProps, { InitToken, InitNotif, changeChat, newVocal, changeChatdouble })(Home);
