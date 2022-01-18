import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('calendar')
export class Calendar extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '用户名',
    name: 'username',
  })
  username: string
}
