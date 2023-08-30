import { openDB } from "idb";
import { header } from "./header";

const initdb = async () =>
  openDB("jateDB", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDB = await openDB("jateDB", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ value: header + content });
  const result = await request;
  // console.error("putDb not implemented");
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDB = await openDB("jateDB", 1);
  const tx = jateDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  // added array destructuring because result was coming back and array and couldn't be split by codemirror
  const [result] = await request;
  // console.error("getDb not implemented");
  return result;
};

initdb();
