import React from 'react';
import ReactDOM from 'react-dom';
import { TownCenter, Store } from './store'
import { Arabia } from './modules/maps'
import { Villager } from './modules/units'
import game from './data/game'

it('compiles', () => {
  const store = new Store()
  expect(store)
});

it('initializes with a speed', () => {
  const store = new Store()
  expect(store.settings.get('speed').value).toBeGreaterThan(0)
});

it('progresses through time at the correct rate', () => {
  const store = new Store()
  expect(store.time).toBe(0)
  store.settings.set('speed', game.speeds[3])
  expect(store.settings.get('speed').value).toBe(100) // gamesecond / second
  store.update(10) // live action seconds
  expect(store.time).toBe(1000) // game seconds
})