// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM-zs81CxoaGnE1tblGmmqmRzl7ikT530",
  authDomain: "login-site-9b171.firebaseapp.com",
  projectId: "login-site-9b171",
  storageBucket: "login-site-9b171.firebasestorage.app",
  messagingSenderId: "825852109510",
  appId: "1:825852109510:web:7e13256b04bd64b2c32dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Google 로그인
document.getElementById("googleLogin").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      console.log(result.user);
    })
    .catch(err => alert(err.message));
});

// 🔹 이메일 로그인
document.getElementById("emailLogin").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .catch(err => alert(err.message));
});

// 🔹 이메일 회원가입
document.getElementById("emailSignup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .catch(err => alert(err.message));
});

// 🔹 로그아웃
document.getElementById("logout").addEventListener("click", () => {
  auth.signOut();
});

// 🔹 로그인 상태 변화 감지
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    document.getElementById("user-info").textContent = `${user.displayName || user.email} 님 환영합니다!`;
  } else {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("user-section").style.display = "none";
  }
});


