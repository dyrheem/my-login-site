// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM 요소
const statusEl = document.getElementById("status");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// 로그인 버튼
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
    alert("로그인 실패");
  }
});

// 로그아웃 버튼
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
});

// 로그인 상태 감지
onAuthStateChanged(auth, (user) => {
  if (user) {
    statusEl.textContent = `✅ 로그인됨: ${user.email}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    statusEl.textContent = "❌ 로그인되지 않음";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});
