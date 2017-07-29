import TownCenter from './TownCenter'
import { observable } from 'mobx'
import { Villager } from '../units'
import { FeudalAge } from '../technologies'
import { Store } from '../../store'
import { Arabia } from '../maps'

it('Queues are properly registered', () => {
    const store = new Store()
    const t = new TownCenter(store)
    expect(store.queues.get(t.queueName)).toEqual(observable.array())
    store.queues.get(t.queueName).push(new Villager())
    expect(store.queues.get(t.queueName)).toEqual(observable.array([new Villager()]))
})

it('Example Dark Age -> Feudal Age build', () => {
    const store = new Store()
    store.settings.get('speed').value = 100
    store.resources['food'] = 600
    const t = new TownCenter(store)
    store.buildings.push(t)
    expect(store.queues.values().length).toBe(1)
    store.queues.get(t.queueName).push(new Villager())
    store.queues.get(t.queueName).push(new Villager())
    expect(store.queues.get(t.queueName).length).toBe(2)
    store.update(2)
    expect(store.units.length).toBe(2)
    expect(store.queues.get(t.queueName).length).toBe(0)
    expect(store.resources['food']).toBe(500)
    store.queues.get(t.queueName).push(new FeudalAge())
    store.update(3)
    expect(store.technologies.length).toBe(1)
    expect(store.resources['food']).toBe(0)
})
