import * as express from 'express';
import {ExpressErrorMiddlewareInterface, Middleware, HttpError} from 'routing-controllers';

import { Logger, ILogger} from '../../decorators/Logger';

@Middleware({type: 'after'})
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    public isProd = process.env.NODE_ENV === 'production';

    constructor(
        @Logger(__filename) private log: ILogger
    ){}

    public error(error: HttpError, req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.status(error.httpCode || 500);
        res.json({
            name: error.name,
            message: error.message,
            errors: error[`errors`] || [],
        })

        if (this.isProd) {
            this.log.error(error.name, error.message);
        } else {
            this.log.error(error.name, error.stack);
        }
    }
}