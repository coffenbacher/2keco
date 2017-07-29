import { DarkAge, FeudalAge } from '.'
import { TownCenter } from '../../buildings'
import { Store } from '../../../store'
import { Arabia } from '../../maps'

it('Dark age has no cost', () => {
    expect(new DarkAge().cost).toEqual({})
})

// it('Feudal age is able to be researched from TC', () => {
//     const store = new Store()
//     store.settings.get('speed').value = 100
//     store.resources['food'] = 600
//     const t = new TownCenter(store)
//     expect(store.queues.values().length).toBe(1)
//     t.advance()
//     store.update(1)
//     expect(store.technologies.length).toBe(0)
//     store.update(1)
//     expect(store.technologies[0]).toBeInstanceOf(FeudalAge)
// })
