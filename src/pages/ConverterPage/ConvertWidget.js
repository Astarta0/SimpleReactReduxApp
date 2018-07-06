import React, { Component } from "react";
import {connect} from 'react-redux';

import MeasureInput from './MeasureInput';
import * as converterActions from './actions';
import * as converterSelectors from './selectors';

class ConvertWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            units: '',
            measure: ''
        };
    }

    componentDidMount() {
        this.props.getCourse();

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
        const {rubsForOneEthereum, isGetCoursePending, getCourseError } = this.props;
        const units = this.state.units;
        const rub = this.state.measure === 'ETH' ? toRub(units, rubsForOneEthereum) : units;
        const eth = this.state.measure === 'RUB' ? toEth(units, rubsForOneEthereum) : units;

        if(isGetCoursePending || getCourseError || !rubsForOneEthereum) {
            return(
                <div className='convert-widget main-page__convert-widget'>
                    <h2>{ (getCourseError) ? `${getCourseError}` : 'Data Loading...'}</h2>
                </div>
            );
        }

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

function toRub(ethereum, rubsForOneEthereum) {
    if (ethereum==='') return '';
    return (Math.round(rubsForOneEthereum*ethereum));
}

function toEth(rub, rubsForOneEthereum) {
    if (rub==='') return '';
    return (Math.round(rub/rubsForOneEthereum));
}

function mapStateToProps(state) {
    return {
        getCourseError: converterSelectors.getCourseError(state),
        isGetCoursePending: converterSelectors.isGetCoursePending(state),
        rubsForOneEthereum: converterSelectors.getCourseRubsForOneEthereum(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCourse: () => {
            dispatch(converterActions.getCourse());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertWidget);

