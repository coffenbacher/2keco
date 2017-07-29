export default class GameEvent {
    constructor(delta, startTime, callback) {
        this.delta = delta
        this.startTime = startTime
        this.finishTime = this.startTime + this.delta
        this.callback = callback
    }

    execute() {
        this.callback()
    }
}
