
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

// 회원가입
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("✅ 회원가입 성공: " + userCredential.user.email);
    })
    .catch(error => {
      alert("❌ 오류: " + error.message);
    });
}

// 로그인
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("✅ 로그인 성공: " + userCredential.user.email);
    })
    .catch(error => {
      alert("❌ 오류: " + error.message);
    });
}

// 로그아웃
function logout() {
  auth.signOut()
    .then(() => {
      alert("🚪 로그아웃 성공");
    })
    .catch(error => {
      alert("❌ 오류: " + error.message);
    });
}

// 로그인 상태 확인 리스너
auth.onAuthStateChanged(user => {
  const status = document.getElementById("status");
  if (user) {
    status.innerText = "로그인 상태: " + user.email;
  } else {
    status.innerText = "로그인 상태: 없음";
  }
});
