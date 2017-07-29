import { observable } from 'mobx'
import { GameEvent } from './modules/game'
import Unit from './modules/units/Unit'
import Technology from './modules/technologies/Technology'
import game from './data/game.json'

class Store {
    @observable time = 0
    settings = observable.map({
        'speed': game.speeds[2]
    })

    @observable resources = {
        'food': 200,
        'wood': 50,
        'gold': 100,
        'stone': 60
    }

    queues = observable.map()
    @observable units = []
    @observable events = []
    @observable buildings = []
    @observable technologies = []

    subtractCost(cost) {
        const ks = Object.keys(this.resources)
        if(!ks.every(k => (this.resources[k] - (cost[k] || 0) >= 0))) {
            return false
        }
        ks.map(k => {
            /* Charge it */
            this.resources[k] = this.resources[k] - (cost[k] || 0)
        })
        return true
    }

    registerQueue(queueName) {
        const q = this.queues.get(queueName) || []
        this.queues.set(queueName, q)
    }

    newEvent(e) {
        /* Need to sort events here */
        this.events.push(e)
    }

    startGame() {
        /* Starts game in real time, unnecessary for testing */
        this.lastUpdate = Date.now();
        this.updateInterval = setInterval(() => this.update(), 30);
    }

    loadMap(map) {
        map.init(this)
    }

    /*
    Gets time passed since last update, and updates now 
    to last update.
    */
    getUpdateTime() {
        var passed = Date.now() - this.lastUpdate;
        this.lastUpdate = Date.now();
        return passed;
    }

    /*
    Function is called by the timer to do all updates in the game.
    */
    update(elapsed) {
        //time since last update.
        elapsed = elapsed || (this.getUpdateTime() / 1000);
        const gamesecondsElapsed = elapsed * this.settings.get('speed').value

        // mainloop
        for (let i=0;i<gamesecondsElapsed;i++) {
            this.time += 1

            /* Handle game events */
            if (this.events.length > 0 && this.time >= this.events[0].finishTime) {
                const e = this.events.shift()
                e.callback()
            }

            /* Handle production queues */
            for (let b of this.buildings.filter(b => !b.producing)) {
                const queue = this.queues.get(b.queueName)
                if (queue.filter(i => !i.underProduction).length > 0) {
                    const item = queue[0]
                    if(this.subtractCost(item.cost)) {
                        b.producing = item
                        item.underProduction = true
                        const e = new GameEvent(item.productionTime, this.time, () => {
                            b.producing = null
                            item.underProduction = false
                            if (item instanceof Unit) {
                                this.units.push(item)
                            } else if (item instanceof Technology) {
                                this.technologies.push(item)
                            }
                            
                            queue.splice(queue.indexOf(item), 1)
                        })
                        this.newEvent(e)
                    }
                }
            }
        }
    }
}

export { Store }