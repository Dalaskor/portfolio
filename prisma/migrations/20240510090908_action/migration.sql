-- CreateTable
CREATE TABLE "action" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "svg" TEXT,

    CONSTRAINT "action_pkey" PRIMARY KEY ("id")
);
