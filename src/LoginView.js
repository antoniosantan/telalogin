import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAnnuEKDwJFF8QouhP_HJoofgDqPb2QYl4",
  authDomain: "cbhouse-7ba09.firebaseapp.com",
  projectId: "cbhouse-7ba09",
  storageBucket: "cbhouse-7ba09.appspot.com",
  messagingSenderId: "89976032445",
  appId: "1:89976032445:web:dc22dcbb491caed9d5bbd4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Perform login logic here
  };
const loginFirebase = () => {
 const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    //signed in
    const user = userCredential.user;
    console.log('login sucessful!');
    navigation.navigate("Task", {idUser: user.uid})
    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
         
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={loginFirebase}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 100,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    color:'#fff',
    
     },
  input: {
    borderBottomColor: '#999',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 20,
    width: '200%',
  
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    width: '200%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    
  },
};

export default LoginView;