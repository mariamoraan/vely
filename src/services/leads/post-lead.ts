import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../core/firebase";
import type { Lead } from "../../domain/lead";

export const postLead = async (lead: Lead) => {
    await setDoc(doc(db, "leads", lead.email), {
        email: lead.email,
        name: lead.name
    });
}