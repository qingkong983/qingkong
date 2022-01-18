import { configLog } from './index'
import * as fs from 'fs'
import * as YAML from 'yaml'

export const prepareInit = () => {
  const conf = fs.readFileSync(
    `./conf/application${
      process.env.CUSTOM_ENV ? process.env.CUSTOM_ENV : ''
    }.yml`,
    'utf8',
  )
  global.conf = YAML.parse(conf)
}
