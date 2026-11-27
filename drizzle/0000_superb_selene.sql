CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`display_name` text NOT NULL,
	`password_hash` text NOT NULL,
	`role` text NOT NULL,
	`shelter_id` integer,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`shelter_id`) REFERENCES `shelters`(`id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "role_check" CHECK("users"."role" IN ('admin', 'volunteer', 'shelter'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `shelters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`city` text NOT NULL,
	`address` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`logo_url` text,
	`cover_url` text,
	`is_published` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `shelters_slug_unique` ON `shelters` (`slug`);--> statement-breakpoint
CREATE TABLE `pets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`shelter_id` integer NOT NULL,
	`name` text NOT NULL,
	`species` text NOT NULL,
	`breed` text,
	`age` integer,
	`gender` text,
	`size` text,
	`description` text,
	`status` text DEFAULT 'available' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`shelter_id`) REFERENCES `shelters`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "pet_status_check" CHECK("pets"."status" IN ('available', 'pending', 'adopted', 'archived'))
);
--> statement-breakpoint
CREATE TABLE `pet_media` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`pet_id` integer NOT NULL,
	`url` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `volunteers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`shelter_id` integer NOT NULL,
	`approved_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`available_days` text DEFAULT '[]' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`shelter_id`) REFERENCES `shelters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_shelter_unique` ON `volunteers` (`user_id`,`shelter_id`);--> statement-breakpoint
CREATE TABLE `adoption_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`pet_id` integer NOT NULL,
	`shelter_id` integer NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`message` text,
	`status` text DEFAULT 'new' NOT NULL,
	`note` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`shelter_id`) REFERENCES `shelters`(`id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "status_check" CHECK("adoption_applications"."status" IN ('new', 'in_review', 'approved', 'rejected'))
);
--> statement-breakpoint
CREATE TABLE `volunteer_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`shelter_id` integer NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`message` text NOT NULL,
	`help_types` text DEFAULT '[]' NOT NULL,
	`available_days` text DEFAULT '[]' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`note` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`shelter_id`) REFERENCES `shelters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `volunteer_applications_email_unique` ON `volunteer_applications` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_shelter_unique` ON `volunteer_applications` (`user_id`,`shelter_id`);