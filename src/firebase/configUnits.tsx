import { initializeApp } from "firebase/app";
import { getStorage, uploadBytesResumable, UploadTaskSnapshot, getDownloadURL, ref } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD6vSiH2z8cO-HhD04tpsaeYHG0YQNGzUE",
    authDomain: "mantenimientobuses-922ff.firebaseapp.com",
    projectId: "mantenimientobuses-922ff",
    storageBucket: "mantenimientobuses-922ff.appspot.com",
    messagingSenderId: "560401986689",
    appId: "1:560401986689:web:bd93f6f4139762e2678980"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export const uploadFile = (
    file: File,
    updateCb: (snapshot: UploadTaskSnapshot) => void = () => false

): Promise<string> => {
    const path = `PhotosUnits/$(file.name)`;
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((res, rej) => {
        return uploadTask.on(
            "state_changed",
            updateCb,
            () => rej(null),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloandURL: string) => {
                     res(downloandURL) 
                })
            }
        )
    })

};

export default firebaseConfig