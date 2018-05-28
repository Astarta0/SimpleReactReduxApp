import React, { Component } from "react";
import MeasureInput from './MeasureInput';

export default class ConvertWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            units: '',
            measure: ''
        };
    }

    handleUnitsChange = (event) => {
        if (event.target.value.length > 10) {
            event.target.value = event.target.value.slice(0, 10);
        }

        this.setState({
            units: event.target.value,
            measure: event.target.name
        }, function () {
            console.log('set state')
        });
    };

    render() {
        const units = this.state.units;
        const rub = this.state.measure === 'ETH' ? toRub(units) : units;
        const eth = this.state.measure === 'RUB' ? toEth(units) : units;

        return(
            <div className='convert-widget main-page__convert-widget'>
                <MeasureInput
                    className='convert-widget__first-measure-input'
                    nameMeasure={'ETH'}
                    onChange={this.handleUnitsChange}
                    units={eth}
                />
                <MeasureInput nameMeasure={'RUB'} onChange={this.handleUnitsChange} units={rub}/>
            </div>
        );
    }
};

function toRub(ethereum) {
    if (ethereum==='') return '';
    return (Math.round(41928.6573*ethereum));
}

function toEth(rub) {
    if (rub==='') return '';
    return (Math.round(rub/41928.6573));
}


