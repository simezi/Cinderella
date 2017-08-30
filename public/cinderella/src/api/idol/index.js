/**
 * Created by 9simezi on 2017/08/29.
 */
import firebase from 'firebase';

export async function getIdols() {
  const db = firebase.database();
  const idolRef = db.ref('/idols/');
  const idolsObj = await idolRef.once('value');

  const temp = [];
  idolsObj.forEach((idol) => {
    temp.push(idol.val());
  });
  return temp;
}

export async function getIdolSongs(idol) {
  const db = firebase.database();
  const songRef = db.ref('/idolSongs/').child(idol);
  const obj = await songRef.once('value');
  return obj.val();
}
