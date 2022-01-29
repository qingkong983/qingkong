import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {CommonBaseEntity} from "../../../common/base/common-base.entity";

@Entity('user')
export class User extends CommonBaseEntity{

  @Column({
    name: 'username',
    type: 'varchar',
    default: '',
    comment: 'username',
  })
  username: string;

  @Column({
    name: 'weapp_id',
    type: 'varchar',
    default: '',
    comment: '微信id',
  })
  weappId: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '手机号',
  })
  phone: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '邮箱',
  })
  email: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '密码',
  })
  password: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '名字',
    name: 'real_name',
  })
  realName: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '城市',
    name: 'city',
  })
  city: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '昵称',
    name: 'nick_name',
  })
  nickName: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '头像',
    name: 'avatar_url',
  })
  avatarUrl: string;

  @Column({
    type: 'int',
    default: 1,
    comment: '性别',
  })
  gender: string;
}
