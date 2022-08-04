import firebase from 'firebase/app';
import 'firebase/database';

const updateProfile = async (req, res, dept) => {
  const ref = firebase.database().ref('dept').child(req.query.id);
  const { snapshot } = await ref.transaction((dept) => {
    
    console.log("REQ -", dept );

    if (dept === null) {
      return ''
    }
    return dept;
  })
  return res.status(200).json({ 
    dept: snapshot.val()
  })
}

export default updateProfile;