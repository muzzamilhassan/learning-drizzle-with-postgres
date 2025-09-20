CREATE TABLE "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
