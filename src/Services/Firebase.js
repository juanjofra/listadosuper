import {db} from './FirebaseConfig';

export function update(id, odjeto) {
    db.collection('todo').doc(id).update({...odjeto});
}


export const getListTodoWithWhere = (condition, callback) => {
  return db.collection('todo')
  .where('delete','==',condition).orderBy('status')
  .onSnapshot(snap => {
   const todos = snap.docs.map(doc => {
      const data = doc.data();
      const id = doc.id;
      return {
        ...data,
        id
      }
      });
      callback(todos);
    });
}


export const addTodo = (todo) => {
  db.collection("todo").
  add(todo).then((e) => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
}