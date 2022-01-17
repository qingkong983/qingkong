import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('user_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  myInfo(currentUser: number) {
    return this.userRepository.findOne({ id: currentUser })
  }

  ins() {
    return this.userRepository.insert([{ username: '1', password: '2' }])
  }
}
