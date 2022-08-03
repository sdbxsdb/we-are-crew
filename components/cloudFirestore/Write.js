import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToCloudFirestore = () => {

  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('crew')
        .doc('depts')
        .set({
          id: 123,
          name: 'John Doe',
          dept: 'grip',
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),
        })
        .then(alert('Successfully sent data to Cloud Firestore'))
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }
  return (
    <>
      <button onClick={sendData}>Send Data To Cloud Firestore</button>
    </>
  )
}

export default WriteToCloudFirestore;