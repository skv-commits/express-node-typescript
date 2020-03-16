import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'


class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {

        const users = [
            {
                id: 1,
                name: 'Test0'
            },
            { id: 2, name: 'Test1' }, { id: 3, name: "Test2" }


        ]

        res.status(200).send({ users })
    }
}

export default HomeController