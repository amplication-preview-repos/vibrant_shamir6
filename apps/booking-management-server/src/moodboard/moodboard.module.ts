import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MoodboardModuleBase } from "./base/moodboard.module.base";
import { MoodboardService } from "./moodboard.service";
import { MoodboardController } from "./moodboard.controller";
import { MoodboardResolver } from "./moodboard.resolver";

@Module({
  imports: [MoodboardModuleBase, forwardRef(() => AuthModule)],
  controllers: [MoodboardController],
  providers: [MoodboardService, MoodboardResolver],
  exports: [MoodboardService],
})
export class MoodboardModule {}
