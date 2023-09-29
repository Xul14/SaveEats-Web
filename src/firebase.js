import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB4Yrai4f4Bmfx1vmViYrm8L_pGelH5y-s",
    authDomain: "save-eats.firebaseapp.com",
    projectId: "save-eats",
    storageBucket: "save-eats.appspot.com",
    messagingSenderId: "437274259237",
    appId: "1:437274259237:web:0afa03c170f2f7eb43f4cc"
};

const app = initializeApp(firebaseConfig);

export const uploadImageToFirebase = async (imageFile) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${imageFile.name}`);

    try {
        await uploadBytes(storageRef, imageFile);
        const imageURL = await getDownloadURL(storageRef);
        return imageURL;
    } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        throw error;
    }
};