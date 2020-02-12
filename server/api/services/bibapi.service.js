import l from '../../common/logger';
import db from './bibapi.db.service';

class bibapiService {
  namePredict(nameFragment) {
    l.info(`${this.constructor.name}.namePredict(${nameFragment})`);
    return db.namePredictDB(nameFragment);
  }
}

export default new bibapiService();
