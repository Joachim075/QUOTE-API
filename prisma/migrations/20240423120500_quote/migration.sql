-- CreateTable
CREATE TABLE "auther" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "quotesId" INTEGER,

    CONSTRAINT "auther_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "auther_email_key" ON "auther"("email");

-- CreateIndex
CREATE UNIQUE INDEX "quotes_id_key" ON "quotes"("id");

-- AddForeignKey
ALTER TABLE "auther" ADD CONSTRAINT "auther_quotesId_fkey" FOREIGN KEY ("quotesId") REFERENCES "quotes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
