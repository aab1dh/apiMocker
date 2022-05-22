import { Profile, ProfileOverrides } from './profileModel'
import { mockerService } from '../../utils/mocker/mockerService'
export class ProfileService {
    public get(): Promise<any> {
        return mockerService.mocker('profile', Profile, { overrides: ProfileOverrides });
    }



}