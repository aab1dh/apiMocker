import { Profile, ProfileOverrides } from './profileModel'
import { fakerService } from '../utils/faker/fakerService'
export class ProfileService {
    public get(): Promise<any> {
        return fakerService.faker('profile', Profile, { overrides: ProfileOverrides });
    }



}