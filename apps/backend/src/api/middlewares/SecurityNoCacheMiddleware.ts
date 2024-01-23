import * as express from 'express';
import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';
import * as helmet from 'helmet';

@Middleware({type: 'before'})
class SecurityNoCacheMiddleware implements ExpressMiddlewareInterface {
    public use(req: express.Request, res: express.Response, next: express.NextFunction) {
        return helmet.noCache()(req, res, next);
    }
}