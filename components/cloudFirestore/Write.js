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
        avail: "",
        phone: "",
        dept: "",
        grade: "", 
        stepUp: false,
        qualis: "", 
        canWorkIn: ["Place 1", "Place 2", "Place 3"],
        credits: [
          {
          jobTitle: "Job1",
          role: "Role1"
        },
          {
          jobTitle: "Job2",
          role: "Role2"
        },
          {
          jobTitle: "Job3",
          role: "Role3"
        }
      ],
        bio: ""
        // time_stamp: firebase.firestore.Timestamp.fromDate(new Date(`${month}-${date}-${year}`,)),
      })
      .then(
        console.log("User Data Added to Cloud Firestore")
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

}

export default WriteToCloudFirestore;