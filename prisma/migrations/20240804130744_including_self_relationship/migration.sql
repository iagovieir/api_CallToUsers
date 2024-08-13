-- AlterTable
ALTER TABLE `Users` ADD COLUMN `leaderId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_leaderId_fkey` FOREIGN KEY (`leaderId`) REFERENCES `Users`(`CPF`) ON DELETE SET NULL ON UPDATE CASCADE;
