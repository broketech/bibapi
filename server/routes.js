import bibapiRouter from './api/controllers/bibapi/router';

export default function routes(app) {
  // app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/bibapi', bibapiRouter);
}
