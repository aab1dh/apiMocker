import { User, UserOverrides } from './usersModel'
import { fakerService } from '../utils/faker/fakerService'

export class UsersService {
    public get(): Promise<any> {
        return fakerService.faker('profile', User, { repeat: 10, overrides: UserOverrides })
    }

}