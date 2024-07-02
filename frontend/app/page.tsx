import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import {firebaseConfig} from "@/lib/firebase/config";
import {initializeApp} from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function HomePage() {
  console.log(firebaseConfig)
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGooglePopUp = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
