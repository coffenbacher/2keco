import Unit from './Unit'

export default class Villager extends Unit {
    constructor() {
        const unitData = {
            cost: {
                'food': 50
            },
            queueName: 'TownCenter',
            productionTime: 25
        }
        super(unitData)
    }
}