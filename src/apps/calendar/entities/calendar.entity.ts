import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('calendar')
export class Calendar extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '提议',
    name: 'proposal',
  })
  proposal: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '内容',
    name: 'content',
  })
  content: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '出自',
    name: 'from',
  })
  from: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '职业',
    name: 'profession',
  })
  profession: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '作者',
    name: 'author',
  })
  author: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '作者源名',
    name: 'author_origin_name',
  })
  authorOriginName: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '日期',
    name: 'date',
  })
  date: string

  @Column({
    type: 'varchar',
    default: '',
    comment: 'background',
    name: 'background',
  })
  background: string
}
