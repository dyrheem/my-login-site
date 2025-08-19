
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgoWXLCCHfgUIyhH3HT01uDGqqeTbffYA",
  authDomain: "my-login-site-5cd7f.firebaseapp.com",
  projectId: "my-login-site-5cd7f",
  storageBucket: "my-login-site-5cd7f.firebasestorage.app",
  messagingSenderId: "784735431463",
  appId: "1:784735431463:web:ce092fe795913e28b91702"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => alert("회원가입 성공"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(user => alert("로그인 성공"))
    .catch(err => alert(err.message));
}
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



