CREATE TABLE "admins" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	CONSTRAINT "admins_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "santri" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama" varchar(256) NOT NULL,
	"gender" varchar(20) NOT NULL,
	"hafalan" varchar DEFAULT 0,
	"jurusan" varchar(225) NOT NULL
);
