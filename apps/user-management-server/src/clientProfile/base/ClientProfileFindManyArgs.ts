/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClientProfileWhereInput } from "./ClientProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClientProfileOrderByInput } from "./ClientProfileOrderByInput";

@ArgsType()
class ClientProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClientProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClientProfileWhereInput, { nullable: true })
  @Type(() => ClientProfileWhereInput)
  where?: ClientProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [ClientProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClientProfileOrderByInput], { nullable: true })
  @Type(() => ClientProfileOrderByInput)
  orderBy?: Array<ClientProfileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClientProfileFindManyArgs as ClientProfileFindManyArgs };
