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
  appId: "1:784735431463:web:efa52b22ebdb22ecb91702"
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

