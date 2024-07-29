// // import { useState } from "react";
// // import { Button, Image } from "react-bootstrap";
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// // import { storage } from "../firebase";

// // export default function FireBaseImageUpload() {
// //     const [imageUpload, setImageUpload] = useState(null);
// //     const [imageUrl, setImageUrl] = useState(null);

// //     const uploadImage = () => {
// //         if (imageUpload == null) return;

// //         const imageRef = ref(storage, `images/${imageUpload.name}`);

// //         uploadBytes(imageRef, imageUpload).then(() => {
// //             getDownloadURL(imageRef).then((url) => {
// //                 setImageUrl(url);
// //                 alert("Image Uploaded");
// //             });
// //         });
// //     };

// //     return (
// //         <>
// //             <div className="text-3xl text-center mt-6 font-bold">
// //                 <p className="text-3xl text-center mt-6 font-bold"
// //                     style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>
// //                     My Profile
// //                 </p>
// //                 {imageUrl && <Image src={imageUrl} style={{ width: 150 }} fluid roundedCircle />}
// //                 <p className="mt-5" style={{ margin: 0, fontSize: "80px", fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>
// //                     Email: Khai Xiang
// //                 </p>
// //                 <div className="App">
// //                     <div className="text-3xl text-center mt-6 font-bold">
// //                         <input
// //                             className="text-3xl text-center mt-6 font-bold"
// //                             style={{
// //                                 fontSize: "50px",
// //                                 fontFamily: 'Lilita One, cursive',
// //                                 color: "dodgerblue",
// //                                 marginRight: "100px"  // Adjust the margin as needed
// //                             }}
// //                             type="file"
// //                             onChange={(e) => setImageUpload(e.target.files[0])}
// //                         />
// //                         <Button
// //                             style={{
// //                                 fontSize: "50px",
// //                                 fontFamily: 'Lilita One, cursive',
// //                                 color: "white"
// //                             }}
// //                             onClick={uploadImage}
// //                         >
// //                             Upload
// //                         </Button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }
// import { useState } from "react";
// import { Button, Image } from "react-bootstrap";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../firebase";

// export default function FireBaseImageUpload() {
//     const [imageUpload, setImageUpload] = useState(null);
//     const [imageUrl, setImageUrl] = useState(null);

//     const uploadImage = () => {
//         if (imageUpload == null) return;

//         const imageRef = ref(storage, `images/${imageUpload.name}`);

//         uploadBytes(imageRef, imageUpload).then(() => {
//             getDownloadURL(imageRef).then((url) => {
//                 setImageUrl(url);
//                 alert("Image Uploaded");
//             });
//         });
//     };

//     return (
//         <>
//             <div className="text-3xl text-center mt-6 font-bold">
//                 <p className="text-3xl text-center mt-6 font-bold"
//                     style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>
//                     My Profile
//                 </p>
//                 {imageUrl && <Image src={imageUrl} style={{ width: 400 }} fluid roundedCircle />}
//                 <p className="mt-5" style={{ margin: 0, fontSize: "80px", fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>
//                     Email: Khai Xiang
//                 </p>
//                 <div className="App">
//                     <div className="text-3xl text-center mt-6 font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//                         <input
//                             className="text-3xl text-center mt-6 font-bold"
//                             style={{
//                                 fontSize: "50px",
//                                 fontFamily: 'Lilita One, cursive',
//                                 color: "dodgerblue"
//                             }}
//                             type="file"
//                             onChange={(e) => setImageUpload(e.target.files[0])}
//                         />
//                         <Button
//                             style={{
//                                 fontSize: "50px",
//                                 fontFamily: 'Lilita One, cursive',
//                                 color: "white"
//                             }}
//                             onClick={uploadImage}
//                         >
//                             Upload
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// import { useState, useEffect } from "react";
// import { Button, Image } from "react-bootstrap";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../firebase";

// export default function FireBaseImageUpload() {
//     const [imageUpload, setImageUpload] = useState(null);
//     const [imageUrl, setImageUrl] = useState(localStorage.getItem('imageUrl'));

//     useEffect(() => {
//         const storedImageUrl = localStorage.getItem('imageUrl');
//         if (storedImageUrl) {
//             setImageUrl(storedImageUrl);
//         }
//     }, []);

//     const uploadImage = () => {
//         if (imageUpload == null) return;

//         const imageRef = ref(storage, `images/${imageUpload.name}`);

//         uploadBytes(imageRef, imageUpload).then(() => {
//             getDownloadURL(imageRef).then((url) => {
//                 setImageUrl(url);
//                 localStorage.setItem('imageUrl', url);
//                 alert("Image Uploaded");
//             });
//         });
//     };

//     return (
//         <>
//             <div className="text-3xl text-center mt-6 font-bold">
//                 <p className="text-3xl text-center mt-6 font-bold"
//                     style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>
//                     My Profile
//                 </p>
//                 {imageUrl && <Image src={imageUrl} style={{ width: 350 }} fluid roundedCircle />}
//                 <p className="mt-5" style={{ margin: 0, fontSize: "80px", fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>
//                     Email: Khai@gmail.com
//                 </p>
//                 <div className="App">
//                     <div className="text-3xl text-center mt-6 font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//                         <input
//                             className="text-3xl text-center mt-6 font-bold"
//                             style={{
//                                 fontSize: "50px",
//                                 fontFamily: 'Lilita One, cursive',
//                                 color: "dodgerblue"
//                             }}
//                             type="file"
//                             onChange={(e) => setImageUpload(e.target.files[0])}
//                         />
//                         <Button
//                             style={{
//                                 fontSize: "50px",
//                                 fontFamily: 'Lilita One, cursive',
//                                 color: "white"
//                             }}
//                             onClick={uploadImage}
//                         >
//                             Upload
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function FireBaseImageUpload() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState(localStorage.getItem('imageUrl'));
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('imageUrl');
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            }
        });

        return () => unsubscribe();
    }, []);

    const uploadImage = () => {
        if (imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setImageUrl(url);
                localStorage.setItem('imageUrl', url);
                alert("Image Uploaded");
            });
        });
    };

    return (
        <>
            <div className="text-3xl text-center mt-6 font-bold">
                <p className="text-3xl text-center mt-6 font-bold"
                    style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>
                    My Profile
                </p>
                {imageUrl && <Image src={imageUrl} style={{ width: 350 }} fluid roundedCircle />}
                <p className="mt-5" style={{ margin: 0, fontSize: "80px", fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>
                    Email: {userEmail ? userEmail : 'Not logged in'}
                </p>
                <div className="App">
                    <div className="text-3xl text-center mt-6 font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <input
                            className="text-3xl text-center mt-6 font-bold"
                            style={{
                                fontSize: "50px",
                                fontFamily: 'Lilita One, cursive',
                                color: "dodgerblue"
                            }}
                            type="file"
                            onChange={(e) => setImageUpload(e.target.files[0])}
                        />
                        <Button
                            style={{
                                fontSize: "50px",
                                fontFamily: 'Lilita One, cursive',
                                color: "white"
                            }}
                            onClick={uploadImage}
                        >
                            Upload
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
