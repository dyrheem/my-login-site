// 🔹 Firebase 설정 (Firebase Console에서 복사한 설정값으로 변경하세요)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
