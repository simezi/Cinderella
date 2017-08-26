import firebase from 'firebase';

export default async function getSongs() {
  const db = firebase.database();
  const songRef = db.ref('/songs/');
  const songsObj = await songRef.once('value');

  const temp = [];
  songsObj.forEach((song) => {
    temp.push(song.val());
  });
  console.log(temp);
  return temp;
}
