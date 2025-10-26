CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"bio" varchar(255),
	"user_id" integer
);
--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;