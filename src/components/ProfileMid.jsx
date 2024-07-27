// import { useState } from "react";
// import { imageDb } from "../firebase";
// import { ref, uploadBytes } from "firebase/storage";
// import { Button } from "react-bootstrap";
// import { v4 } from "uuid";

// export default function ProfileMid() {

//     const [img, setImg] = useState("")
//     const handleClick = () => {
//         const imgRef = ref(imageDb, `files/${v4}`)
//         uploadBytes(imgRef, img)
//     }

//     return (
//         <div className="App">
//             <input type="file" onChange={(e) => setImg(e.target.files[0])} />
//             <Button onClick={handleClick}>Upload</Button>
//         </div>
//     )
// }
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase";

export default function FireBaseImageUpload() {
    const [imageUpload, setImageUpload] = useState(null);
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded")
        })
    };

    return (
        <div className="App">
            <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
            <Button onClick={uploadImage}>Upload</Button>
        </div>
    );
}
