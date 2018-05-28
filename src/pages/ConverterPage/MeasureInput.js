import React, {Component} from "react";

export default class MeasureInput extends Component {

    static propTypes = {

    };

    static defaultProps = {
        className: ''
    };

    render() {
        const {
            nameMeasure,
            units,
            onChange,
            className
        } = this.props;
        const classes = `convert-widget__input-container input-container ${className}`;
        return (
            <div className={classes}>
                <div className='input-container__measure'>{nameMeasure}</div>
                <input
                    className='input-container__input'
                    type='number'
                    value={units}
                    onChange={onChange}
                    name={nameMeasure}
                />
            </div>
        );
    }
};

