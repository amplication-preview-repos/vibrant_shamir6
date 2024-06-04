/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Moodboard as PrismaMoodboard } from "@prisma/client";

export class MoodboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MoodboardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.moodboard.count(args);
  }

  async moodboards<T extends Prisma.MoodboardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MoodboardFindManyArgs>
  ): Promise<PrismaMoodboard[]> {
    return this.prisma.moodboard.findMany<Prisma.MoodboardFindManyArgs>(args);
  }
  async moodboard<T extends Prisma.MoodboardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MoodboardFindUniqueArgs>
  ): Promise<PrismaMoodboard | null> {
    return this.prisma.moodboard.findUnique(args);
  }
  async createMoodboard<T extends Prisma.MoodboardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MoodboardCreateArgs>
  ): Promise<PrismaMoodboard> {
    return this.prisma.moodboard.create<T>(args);
  }
  async updateMoodboard<T extends Prisma.MoodboardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MoodboardUpdateArgs>
  ): Promise<PrismaMoodboard> {
    return this.prisma.moodboard.update<T>(args);
  }
  async deleteMoodboard<T extends Prisma.MoodboardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MoodboardDeleteArgs>
  ): Promise<PrismaMoodboard> {
    return this.prisma.moodboard.delete(args);
  }
}
