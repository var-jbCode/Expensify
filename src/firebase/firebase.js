import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD4088O9vfVcjjVa81bKcrpyzxV8WK8cVE",
    authDomain: "expensify-7d593.firebaseapp.com",
    databaseURL: "https://expensify-7d593-default-rtdb.firebaseio.com",
    projectId: "expensify-7d593",
    storageBucket: "expensify-7d593.appspot.com",
    messagingSenderId: "1003248072870",
    appId: "1:1003248072870:web:32ce573b3cd341215d1c67",
    measurementId: "G-SHY1C0ZHBL"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }






