import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from '../../firebase/useUser';


const ReadToCloudFirestore = () => {
  const { user } = useUser();

  const readData = () => {
    try {
    firebase
      .firestore()
      .collection("crew")
      .doc(user.id)
      .onSnapshot((doc) => {
        console.log(doc.data());
      });
    } catch (err) {
      console.log("ERROR -", err);
      alert(err)
    }
  };

  return <button onClick={readData}>Read Data from Cloud Firestore</button>;
};

export default ReadToCloudFirestore;
