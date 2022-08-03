import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToCloudFirestore = () => {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('depts')
        .doc('grip')
        .set({
          id: 3,
          name: 'John Doe',
          dept: 'grip',
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date(`${month}-${date}-${year}`,)),
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