import firebase from "firebase/app";
import "firebase/firestore";

const ReadToCloudFirestore = () => {
  const readData = () => {
    try {
    firebase
      .firestore()
      .collection("depts")
      .doc("grip")
      .onSnapshot((doc) => {
        console.log(doc.data());
      });
    } catch (err) {
      console.log(err);
      alert(err)
    }
  };

  return <button onClick={readData}>Read Data from Cloud Firestore</button>;
};

export default ReadToCloudFirestore;
