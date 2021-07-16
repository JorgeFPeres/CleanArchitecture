import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'
import { AccountModel } from '../models/account-models'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAccountModel = (): AccountModel => ({
  acessToken: faker.random.uuid(),
})