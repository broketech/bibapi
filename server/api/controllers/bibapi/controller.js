import bibapiService from '../../services/bibapi.service';

export class Controller {
  namePredict(req, res) {
    bibapiService.namePredict(req.params.nameFragment).then(r => {
      if (r) res.send(r);
      else res.status(404).end();
    });
  }

}
export default new Controller();
