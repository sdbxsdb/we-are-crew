import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from '../../firebase/useUser';


const ReadToCloudFirestore = () => {
  const { user } = useUser();

  const readData = () => {
    try {
    firebase
      .firestore()
      .collection("depts")
      .doc(user.id)
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
