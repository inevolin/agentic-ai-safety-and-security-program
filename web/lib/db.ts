import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

function createPrismaClient(): PrismaClient {
  const dbUrl =
    process.env.DATABASE_URL ??
    `file:${process.cwd()}/dev.db`;

  const libsql = createClient({ url: dbUrl });
  const adapter = new PrismaLibSQL(libsql);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error"] : [],
  } as ConstructorParameters<typeof PrismaClient>[0]);
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
