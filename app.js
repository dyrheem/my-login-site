// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgoWXLCCHfgUIyhH3HT01uDGqqeTbffYA",
  authDomain: "my-login-site-5cd7f.firebaseapp.com",
  projectId: "my-login-site-5cd7f",
  storageBucket: "my-login-site-5cd7f.firebasestorage.app",
  messagingSenderId: "784735431463",
  appId: "1:784735431463:web:97d38c1bcd28ff47b91702"
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

