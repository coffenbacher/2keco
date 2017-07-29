import { GameEvent } from '../game'

export default class ProductionBuilding {
    constructor(store, queueName) {
        store.registerQueue(queueName)
        this.queueName = queueName
        this.producing = null
    }
}