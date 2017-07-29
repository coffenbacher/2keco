import React from 'react'
import store from '../store'
import moment from 'moment'
import { observer } from 'mobx-react'

@observer
export default class GameBar extends React.Component {
    render() {
        return <div className='row'>
            <div className='col-lg-2'>{moment().startOf('day').seconds(store.time).format('HH:mm:ss')}</div>
            <div className='col-lg-3'>Pop: 0 / 200</div>
            <div className='col-lg-1'>Food: 200</div>
            <div className='col-lg-1'>Wood: 200</div>
            <div className='col-lg-1'>Gold: 200</div>
            <div className='col-lg-1'>Stone: 200</div>
        </div>
    }
}