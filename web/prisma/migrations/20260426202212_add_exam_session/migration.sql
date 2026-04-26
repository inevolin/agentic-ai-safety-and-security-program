-- CreateTable
CREATE TABLE "ExamSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cookieId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME NOT NULL,
    "submittedAt" DATETIME,
    "score" INTEGER,
    "passed" BOOLEAN,
    "verifyCode" TEXT
);

-- CreateIndex
CREATE INDEX "ExamSession_cookieId_idx" ON "ExamSession"("cookieId");
