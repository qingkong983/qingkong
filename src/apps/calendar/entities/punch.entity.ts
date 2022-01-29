import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('punch')
export class Punch extends CommonBaseEntity {
    @Column({
        type: "int",
        default: 0,
        comment: '打卡人',
        name: 'puncher',
    })
    puncher: number
}
