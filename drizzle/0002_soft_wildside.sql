CREATE TABLE "testing" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"data" jsonb NOT NULL
);
