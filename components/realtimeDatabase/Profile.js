import firebase from 'firebase/app';
import 'firebase/database';
import { useState } from 'react';
import { useCollection } from "react-firebase-hooks/firestore";



const Profile = ({ id }) => {
  const [crew] = useCollection(
    firebase.firestore().collection("crew"),
    {}
  );

  if (crew) {
    crew.docs.map((doc) => console.log(doc.data()));
  }


  const db = firebase.firestore();

  const addVoteDocument = async (dept) => {
    await db.collection("crew").doc(user.uid).set({
      vote,
    });
  };

  const [dept, setdept] = useState('');
  
  const changeDept = async ( dept ) => {
    const registerDept = () => fetch(`/api/UpdateProfile?id=${encodeURIComponent(id)}`)
    registerDept();
    setdept(dept);
    console.log('DEPT - ', dept)
  }

  return (
    <div>
      <button onClick={() => changeDept('Grip')}>I am Grip</button>
      <br />
      <button onClick={() => changeDept('Camera')}>I am Camera</button>
      <h1>Dept - { dept ? dept : "No dept set yet." }</h1>
    </div>
  )
}

export default Profile;