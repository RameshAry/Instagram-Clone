import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDCSi7RZIAWkMdEMqyJ-lcIBDbAwvKKKT4',
  authDomain: 'instaclone-4b4ff.firebaseapp.com',
  projectId: 'instaclone-4b4ff',
  storageBucket: 'instaclone-4b4ff.appspot.com',
  messagingSenderId: '816392924158',
  appId: '1:816392924158:web:5a2326928e29a61fbe6eaf',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
