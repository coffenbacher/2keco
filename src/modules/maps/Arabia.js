import Map from './Map'
import { TownCenter } from '../buildings'
import { Villager, Scout } from '../units'

export default class Arabia extends Map {
    constructor() {
        super()
        this.units = [
            new Villager(), 
            new Villager(), 
            new Villager(), 
            new Scout()
        ]
    }

    init(store) {
        store.buildings.push(new TownCenter(store))
        this.units.map(v => store.units.push(v))
    }
}