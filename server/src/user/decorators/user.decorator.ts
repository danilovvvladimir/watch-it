import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../user.schema";

type TypeData = keyof User;

export const GetUser = createParamDecorator(
  (data: TypeData, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    user._id = request.user.userId;

    return data ? user[data] : user;
  },
);
