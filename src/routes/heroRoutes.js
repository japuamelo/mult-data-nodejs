const BaseRoute = require('./base/baseRoute')

class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/heros',
            method: 'GET',
            handler: (request, headers) => {
                return this.db.read()
            }
        }
    }
}

module.exports = HeroRoutes; 