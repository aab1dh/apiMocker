
import {
    Controller,
    Get,
    Route
} from "tsoa";
import { Profile } from "./profileModel";
import { ProfileService } from "./profileService";

@Route("profile")
export class ProfileController extends Controller {
    @Get("/")
    public async getProfile(
    ): Promise<any> {
        return new ProfileService().get().catch(err => { throw err });
    }


}