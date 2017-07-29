export default class Unit {
    constructor(unitData) {
        this.cost = unitData.cost
        this.productionTime = unitData.productionTime
        this.queueName = unitData.queueName
    }
}