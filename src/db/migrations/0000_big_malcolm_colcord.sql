CREATE TABLE `users` (
	`id` int PRIMARY KEY NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`image_url` text
);
