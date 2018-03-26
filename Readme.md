## Application mobile Réact-native Prototype ( Cookit ) Hackathon ESGI 2018  ##

licence MIT.   

J'ai developper cette application dans le cadre du projet Hackathon 2018,
L'idée et de faire un prototype relier a dialogueFlow capable de recevoir des notifications.

La partie parole remplace potentiellement "Djing*" et la partie notification peut éventuellement étre intégrer a nimportequelle application. 
.

### Biblioteque & ressources ###

Toute les Biblioteque utilisée sont sous licence MIT. 

    "axios": "^0.18.0",
    "react": "16.3.0-alpha.1",
    "react-native": "0.54.2",
    "react-native-dialogflow": "^3.0.1",
    "react-native-elements": "^1.0.0-beta2",
    "react-native-gifted-chat": "^0.4.3",
    "react-native-push-notification": "^3.0.2",
    "react-native-router-flux": "^4.0.0-beta.28",
    "react-native-tts": "^1.5.0",
    "react-native-vector-icons": "^4.5.0",
    "react-redux": "^5.0.7",
    "redux": "^3.7.2"



$ npm i --save axios       								-> biblioteque facilitent les requetes http

$ npm i --save react-native-dialogflow 					-> biblioteque qui permet la connexion au dialogueflow

$ npm i --save react-native-element 				    -> biblioteque UI ( font + icones + composenUI )

$ npm i --save react-native-gifted-chat					-> biblioteque ( composent chat ). npm trés populaire, développeur actif dans la communautée RN

$ npm i --save react-native-push-notification 			-> biblioteque Permetant de gerer les notification ( relier au serveur cloud google )

$ npm i --save react-native-router-flux 						-> trés bonne biblioteque gérent le routing sur RN ( inspirer de React-navigation depuis la V4)

$ npm i --save react-native-ttf 								-> seul biblioteque de Text-to-Chat que j'ai réussit a faire marcher. Jackpot la voix par défaut est en français.

// $ npm i --save react-native-vector-icons;  					-> installer de base avec RN element je crois ! 

$ npm i --save react-redux redux 						-> Gestion du state / persistance de la data / gestion des évenements. Bibliotéque redux est la même sur reactJS et react-native, react-redux fait le pont


### Justification ###

React-native est un framework trés performant, jeunne, a la mode et surtout trés maintenable ( d'ou le nombre de bibliotéque 3thrd party que j'ai pu utiliser). 

La bibliotéque axios n'est pas utiliser mais je la met toujour de base dans un projet suceptible d'avoir une connexion et des requettes. 



### Comment l'utiliser ###


Il faut bien évidement avoir l'environement React-native + android (ou IOS)  d'installer 
https://facebook.github.io/react-native/docs/getting-started.html


Une fois l'environement pret 

$ Git clone https://github.com/nicolasdet/React-native-hackathon-prototype.git

$ cd ./prototype

$ npm install

$ react-native run-android 

et voila :smile:
