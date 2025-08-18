// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Firebase SDK 불러오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgoWXLCCHfgUIyhH3HT01uDGqqeTbffYA",
  authDomain: "my-login-site-5cd7f.firebaseapp.com",
  projectId: "my-login-site-5cd7f",
  storageBucket: "my-login-site-5cd7f.firebasestorage.app",
  messagingSenderId: "784735431463",
  appId: "1:784735431463:web:ce092fe795913e28b91702"
};


// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM 요소
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const statusEl = document.getElementById("status");
const authForm = document.getElementById("authForm");
const userInfo = document.getElementById("userInfo");

// 회원가입
signupBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailEl.value, passwordEl.value);
    alert("회원가입 성공!");
  } catch (err) {
    alert("회원가입 실패: " + err.message);
  }
});

// 로그인
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailEl.value, passwordEl.value);
    alert("로그인 성공!");
  } catch (err) {
    alert("로그인 실패: " + err.message);
  }
});

// 로그아웃
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

// 로그인 상태 변화 감지
onAuthStateChanged(auth, (user) => {
  if (user) {
    statusEl.textContent = `로그인됨: ${user.email}`;
    authForm.style.display = "none";
    userInfo.style.display = "block";
  } else {
    statusEl.textContent = "로그인 상태: 없음";
    authForm.style.display = "block";
    userInfo.style.display = "none";
  }
});


