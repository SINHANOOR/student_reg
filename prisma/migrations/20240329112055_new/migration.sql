-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `cours` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `student_roll_key`(`roll`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
