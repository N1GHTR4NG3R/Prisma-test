import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

if (db) {
  console.log("Connected to Database!");
}

main()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await db.$disconnect();
  });

async function main() {
  const users = await db.accounts.findMany();
  console.log(users);
}
