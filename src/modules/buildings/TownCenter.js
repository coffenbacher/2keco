import game from '../../data/game.json'
import ProductionBuilding from './ProductionBuilding'
import { Villager } from '../units'
import { GameEvent } from '../game'
import { DarkAge, FeudalAge, CastleAge, ImperialAge } from '../technologies'

export default class TownCenter extends ProductionBuilding {
    constructor(store) {
        super(store, 'TownCenter')
    }

    // queue() {
    //     const proposedUnit = new Villager()
    //     if (!this.game.subtractCost(proposedUnit.cost)) {
    //         /* Cancel queuing due to expense */
    //         return false
    //     }

    //     this.underProduction = proposedUnit
        

    // }

    // advance() {
    //     const ages = [DarkAge, FeudalAge, CastleAge, ImperialAge]
    //     /* find next age */
    //     const age = new FeudalAge()
    //     if (!this.game.subtractCost(age.cost)) {
    //         /* Cancel queuing due to expense */
    //         return false
    //     }

    //     const e = new GameEvent(age.time, this.game.time, () => {
    //         this.game.technologies.push(age)
    //     })
    //     this.game.newEvent(e)
    //     // this.game.technologies.push(new FeudalAge())
    // }
}