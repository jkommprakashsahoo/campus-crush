import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
  "USER",
  "MODERATOR",
  "ADMIN",
  "SUPER_ADMIN",
]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    publicId: varchar("public_id", { length: 64 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    displayName: varchar("display_name", { length: 120 }).notNull(),
    role: userRoleEnum("role").notNull().default("USER"),
    status: varchar("status", { length: 32 }).notNull().default("ACTIVE"),
    emailVerified: boolean("email_verified").notNull().default(false),
    ageVerified: boolean("age_verified").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
    publicIdIdx: index("users_public_id_idx").on(table.publicId),
    roleIdx: index("users_role_idx").on(table.role),
  }),
);

export const sessions = pgTable(
  "sessions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    sessionTokenHash: text("session_token_hash").notNull(),
    userAgent: text("user_agent"),
    ipHash: text("ip_hash"),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("sessions_user_id_idx").on(table.userId),
    expiresAtIdx: index("sessions_expires_at_idx").on(table.expiresAt),
    tokenHashIdx: uniqueIndex("sessions_token_hash_idx").on(table.sessionTokenHash),
  }),
);

export const approvedColleges = pgTable(
  "approved_colleges",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    domain: varchar("domain", { length: 255 }).notNull().unique(),
    enabled: boolean("enabled").notNull().default(true),
    rules: jsonb("rules").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    enabledIdx: index("approved_colleges_enabled_idx").on(table.enabled),
    domainIdx: index("approved_colleges_domain_idx").on(table.domain),
  }),
);

export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .unique()
      .references(() => users.id, { onDelete: "cascade" }),
    displayName: varchar("display_name", { length: 120 }).notNull(),
    age: integer("age"),
    bio: text("bio"),
    course: varchar("course", { length: 120 }),
    year: integer("year"),
    pronouns: varchar("pronouns", { length: 40 }),
    interests: jsonb("interests").notNull().default([]),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("profiles_user_id_idx").on(table.userId),
  }),
);

export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    actorUserId: uuid("actor_user_id").references(() => users.id, { onDelete: "set null" }),
    action: varchar("action", { length: 128 }).notNull(),
    targetType: varchar("target_type", { length: 128 }).notNull(),
    targetId: text("target_id"),
    details: jsonb("details").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    actorUserIdIdx: index("audit_logs_actor_user_id_idx").on(table.actorUserId),
    actionIdx: index("audit_logs_action_idx").on(table.action),
    dateIdx: index("audit_logs_created_at_idx").on(table.createdAt),
  }),
);
