import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  ow(): any {
    const data = {
      '2022-01-16': {
        suggestion: '忌伪善',
        content: '蚜虫吃青草，锈吃铁，虚伪吃灵魂。',
        from: '《我的一生》',
        profession: '作家',
        name: '安东·巴普洛维奇·契诃夫',
        originName: 'Антон Павлович Чехов',
      },
      '2022-01-17': {
        suggestion: '忌宅',
        content: '生活中没有比变成一个老在家里坐着的人更危险的了。',
        from: '《姆米谷的冬天》',
        profession: '画家',
        name: '拖芙·扬松',
        originName: 'Tove Jansson',
      },
      '2022-01-18': {
        suggestion: '宜想家',
        content:
          '生身之地，空气的色泽是殊异的，泥土的气味是特别的，对父亲和母亲的记忆也浓密密地荡漾着。',
        from: '《心》',
        profession: '作家',
        name: '夏目漱石',
        originName: 'なつめ そうせき',
      },
    };
    // const a = moment
    // moment().format('YYYY-MM-DD');
    return data[moment().format('YYYY-MM-DD')];
  }
}
