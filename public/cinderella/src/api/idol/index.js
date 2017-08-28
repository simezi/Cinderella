/**
 * Created by 9simezi on 2017/08/29.
 */
import firebase from 'firebase';

export default async function getIdols() {
  const db = firebase.database();
  const idolRef = db.ref('/idols/');
  const idolsObj = await idolRef.once('value');

  const temp = [];
  idolsObj.forEach((idol) => {
    temp.push(idol.val());
  });
  return temp;
}
