ALTER TABLE "testing" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "testing" CASCADE;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE text;