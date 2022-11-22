import { firestore } from '../services/fireBaseInit';
import firebase from 'firebase/compat/app';

export const checkOrAddUIDToContest = async (uid: any) => {
  console.log(uid);
  const url = 'https://us-central1-trinity-f4908.cloudfunctions.net/checkUID';
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    body: JSON.stringify({ uid })
  };
  const response = await fetch(url, config);
  const { res } = await response.json();
  return res;
};

export const fetchContest = async (
  setContest: React.Dispatch<
    React.SetStateAction<firebase.firestore.DocumentData>
  >
) => {
  setContest([]);
  await firestore
    .collection('currentContest')
    .orderBy('expirationDate', 'desc')
    .limit(1)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((element) => {
        let data = element.data();
        data.contestId = element.id;
        setContest(data);
        const contestId = JSON.parse(localStorage.getItem('id') as string);
        if (contestId !== data.contestId) {
          localStorage.clear();
          localStorage.setItem('id', JSON.stringify(data.contestId));
        }
      });
    });
};
