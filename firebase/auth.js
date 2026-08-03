import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        alert("Welcome " + result.user.displayName);
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}
