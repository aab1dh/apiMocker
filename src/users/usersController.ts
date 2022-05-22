
import {
    Controller,
    Get,
    Route
} from "tsoa";
import { UsersService } from "./usersService";

@Route("users")
export class UsersController extends Controller {
    @Get("/")
    public async getUser(
    ): Promise<any> {
        return new UsersService().get().catch(err => { throw err });
    }


}