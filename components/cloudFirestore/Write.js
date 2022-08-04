import firebase from 'firebase/app';
import 'firebase/firestore';
import { useUser } from '../../firebase/useUser';

export const sendData = (user) => {

  try {
    firebase
      .firestore()
      .collection('crew')
      .doc(user.id)
      .set({
        id: user.id,
        name: user.name,
        email: user.email,
        dept: '',
        nickname: '',
        // time_stamp: firebase.firestore.Timestamp.fromDate(new Date(`${month}-${date}-${year}`,)),
      })
      .then(
        console.log("User Added to Cloud Firestore")
        )
  } catch (err) {
    console.log(err);
    // alert(err)
  }
}

const WriteToCloudFirestore = () => {
  const { user } = useUser();

  // let newDate = new Date()
  // let date = newDate.getDate();
  // let month = newDate.getMonth() + 1;
  // let year = newDate.getFullYear();

  sendData(user);

  
  return (
    <>
      <button onClick={sendData}>Send Data To Cloud Firestore</button>
    </>
  )
}

export default WriteToCloudFirestore;