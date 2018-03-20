import React from 'react';
import { Dropdown } from '@jenkins-cd/design-language';
import { getArg, setArg } from '../../services/PipelineMetadataService';

const timeUnits = ['SECONDS', 'MINUTES', 'HOURS', 'DAYS', 'NANOSECONDS', 'MICROSECONDS', 'MILLISECONDS'];

export default class TimeUnitPropertyInput extends React.Component {
    render() {
        const { step, type, onChange, propName } = this.props;
        return (
            <div>
                <label className="form-label">{type.capitalizedName + (type.isRequired ? '*' : '')}</label>
                <Dropdown
                    options={timeUnits}
                    defaultOption={getArg(step, propName).value || timeUnits[0]}
                    onChange={timeUnit => {
                        setArg(step, propName, timeUnit);
                        onChange(step);
                    }}
                />
            </div>
        );
    }
}

TimeUnitPropertyInput.propTypes = {
    propName: React.PropTypes.string,
    step: React.PropTypes.any,
    onChange: React.PropTypes.func,
    type: React.PropTypes.any,
};

TimeUnitPropertyInput.dataTypes = ['java.util.concurrent.TimeUnit'];
