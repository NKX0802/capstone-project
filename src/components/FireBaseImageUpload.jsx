// // import { useState } from "react";
// // import { imageDb } from "../firebase";
// // import { ref, uploadBytes } from "firebase/storage";
// // import { Button } from "react-bootstrap";
// // import { v4 } from "uuid";

// // export default function FireBaseImageUpload() {
// //     const [img, setImg] = useState("")
// //     const handleClick = () => {
// //         const imgRef = ref(imageDb, `files/${v4}`)
// //         uploadBytes(imgRef, img)
// //     }

// //     return (
// //         <div className="App">
// //             <input type="file" onChange={(e) => setImg(e.target.files[0])} />
// //             <Button onClick={handleClick}>Upload</Button>
// //         </div>
// //     )
// // }

// import { useState } from "react";
// import { imageDb } from "../firebase"; // Ensure this import is correct
// import { ref, uploadBytes } from "firebase/storage";
// import { Button } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
// import { storage } from "../firebase";

// export default function FireBaseImageUpload() {
//     const [img, setImg] = useState(null);

//     const handleClick = async () => {
//         if (img) {
//             const imgRef = ref(storage, `files/${uuidv4()}`);
//             try {
//                 await uploadBytes(imgRef, img);
//                 console.log("Upload successful!");
//             } catch (error) {
//                 console.error("Upload failed: ", error);
//             }
//         } else {
//             console.log("No image selected");
//         }
//     };

//     return (
//         <div className="App">
//             <input type="file" onChange={(e) => setImg(e.target.files[0])} />
//             <Button onClick={handleClick}>Upload</Button>
//         </div>
//     );
// }
