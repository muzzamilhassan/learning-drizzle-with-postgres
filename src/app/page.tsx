import db from "@/db/db";
import { usersTodo } from "@/db/schema";

export default async function Home() {
  try {
    const todos = await db.select().from(usersTodo);
    console.log(todos);
    await db.insert(usersTodo).values({
      text: "hello",
      done: false, // Changed from "world" to false since 'done' expects a boolean
      // createdAt: new Date(),
    })
    
  } catch (error) {
    console.log(error);
  }


  return (
    <div>
      hello
    </div>
  );
}
