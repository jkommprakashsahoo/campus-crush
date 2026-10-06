CREATE TYPE "public"."user_role" AS ENUM ('USER', 'MODERATOR', 'ADMIN', 'SUPER_ADMIN');

CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "public_id" varchar(64) NOT NULL,
  "email" varchar(255) NOT NULL,
  "password_hash" text NOT NULL,
  "display_name" varchar(120) NOT NULL,
  "role" "user_role" DEFAULT 'USER' NOT NULL,
  "status" varchar(32) DEFAULT 'ACTIVE' NOT NULL,
  "email_verified" boolean DEFAULT false NOT NULL,
  "age_verified" boolean DEFAULT false NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "users_email_unique" UNIQUE ("email"),
  CONSTRAINT "users_public_id_unique" UNIQUE ("public_id")
);

CREATE TABLE IF NOT EXISTS "sessions" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL,
  "session_token_hash" text NOT NULL,
  "user_agent" text,
  "ip_hash" text,
  "expires_at" timestamp with time zone NOT NULL,
  "revoked_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "sessions_token_hash_unique" UNIQUE ("session_token_hash"),
  CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action
);

CREATE TABLE IF NOT EXISTS "approved_colleges" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" varchar(255) NOT NULL,
  "domain" varchar(255) NOT NULL,
  "enabled" boolean DEFAULT true NOT NULL,
  "rules" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "approved_colleges_domain_unique" UNIQUE ("domain")
);

CREATE TABLE IF NOT EXISTS "profiles" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL,
  "display_name" varchar(120) NOT NULL,
  "age" integer,
  "bio" text,
  "course" varchar(120),
  "year" integer,
  "pronouns" varchar(40),
  "interests" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "profiles_user_id_unique" UNIQUE ("user_id"),
  CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action
);

CREATE TABLE IF NOT EXISTS "audit_logs" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "actor_user_id" uuid,
  "action" varchar(128) NOT NULL,
  "target_type" varchar(128) NOT NULL,
  "target_id" text,
  "details" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "audit_logs_actor_user_id_users_id_fk" FOREIGN KEY ("actor_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action
);

CREATE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "users_public_id_idx" ON "users" ("public_id");
CREATE INDEX IF NOT EXISTS "users_role_idx" ON "users" ("role");
CREATE INDEX IF NOT EXISTS "sessions_user_id_idx" ON "sessions" ("user_id");
CREATE INDEX IF NOT EXISTS "sessions_expires_at_idx" ON "sessions" ("expires_at");
CREATE INDEX IF NOT EXISTS "approved_colleges_enabled_idx" ON "approved_colleges" ("enabled");
CREATE INDEX IF NOT EXISTS "approved_colleges_domain_idx" ON "approved_colleges" ("domain");
CREATE INDEX IF NOT EXISTS "profiles_user_id_idx" ON "profiles" ("user_id");
CREATE INDEX IF NOT EXISTS "audit_logs_actor_user_id_idx" ON "audit_logs" ("actor_user_id");
CREATE INDEX IF NOT EXISTS "audit_logs_action_idx" ON "audit_logs" ("action");
CREATE INDEX IF NOT EXISTS "audit_logs_created_at_idx" ON "audit_logs" ("created_at");
