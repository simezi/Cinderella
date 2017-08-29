import firebase from 'firebase';

export async function getSongs() {
  const db = firebase.database();
  const songRef = db.ref('/songs/');
  const songsObj = await songRef.once('value');

  const temp = [];
  songsObj.forEach((song) => {
    temp.push(song.val());
  });
  return temp;
}

export async function getSongIdols(song) {
  const db = firebase.database();
  const songRef = db.ref('/songIdols/').child(song);
  const obj = await songRef.once('value');
  return obj.val();
}
