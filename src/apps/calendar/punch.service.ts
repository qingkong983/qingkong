import {Inject, Injectable} from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {Punch} from "./entities/punch.entity";
import {UserService} from "../user/user.service";
import {Repository} from "typeorm";
import {User} from "../user/entities/user.entity";
import * as moment from "moment-timezone";

@Injectable()
export class PunchService extends TypeOrmCrudService<Punch> {
  constructor(@InjectRepository(Punch, 'DATABASE_CONNECTION') repo,
              @Inject('user_REPOSITORY')
              private userRepository: Repository<User>,) {
    super(repo)
  }
  async recordPunch ({puncher}){
    return this.repo.insert({puncher:puncher})
  }
  async todayPunch(){
    let qb = this.repo.createQueryBuilder('punch')
    const updateTimeRange = {
      start: moment().tz('Asia/Shanghai').subtract(8,'h').subtract(1,'d').format('YYYY-MM-DD') + ' 16:00:00',
      end: moment().tz('Asia/Shanghai').subtract(8,'h').format('YYYY-MM-DD') + ' 16:00:00'
    }
    // const updateTimeRange = {
    //   start:'2020-01-01',
    //   end:'2022-12-12'
    // }
    console.log(JSON.stringify(updateTimeRange))
    if (updateTimeRange && updateTimeRange.start && updateTimeRange.end) {
      qb = qb.andWhere('created_at between :start AND :end', {
        start: updateTimeRange.start,
        end: updateTimeRange.end
      })
    }
    const arr = await qb.getMany()

    const ret = []
    for (let i = 0; i < arr.length; i++) {

      if (ret.map(item=>item.puncherId).includes(arr[i].puncher)){

      } else {
        const user = await this.userRepository.findOne({id:arr[i].puncher})
        ret.push({
          id:arr[i].id,
          puncherId:user.id,
          puncherNickName: user.nickName,
          puncherAvatarUrl: user.avatarUrl
        })
      }


    }
    return ret
    // return qb.getMany()
  }
}
