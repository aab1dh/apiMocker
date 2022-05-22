import { User, UserOverrides } from './usersModel'
import { mockerService } from '../../utils/mocker/mockerService'

export class UsersService {
    public get(): Promise<any> {
        return mockerService.mocker('profile', User, { repeat: 10, overrides: UserOverrides })
    }

}