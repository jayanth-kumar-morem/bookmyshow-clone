import * as express from 'express';
import helmet from 'helmet';
import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before'})
class SecurityHstsMiddleware implements ExpressMiddlewareInterface {
    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return helmet.hsts({
            maxAge: 31536000,
            includeSubDomains: true,
        })(req, res, next)
    }
}