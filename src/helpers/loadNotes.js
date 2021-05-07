import { db } from "../firebase/firebase-config"

export const loadNotes = async(uid) => {

    const noteSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes = [];

    noteSnap.forEach(snapChild => {
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    })

    return notes;
}