// seed.ts
import { db } from "./db";
import { users } from "./schema";

async function main() {
  await db.insert(users).values([
    {
      name: "John Doe",
      email: "john@example.com",
      password: "secret123",
      dateOfBirth: "1990-01-01",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "secret123",
      dateOfBirth: "1995-05-05",
    },
  ]);

  console.log("✅ Users inserted!");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
