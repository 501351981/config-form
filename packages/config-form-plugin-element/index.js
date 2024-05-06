import Select from "./Select";
import Radio from "./Radio";
import Checkbox from './Checkbox'
import CheckboxGroup from "./CheckboxGroup";
export default {
    componentMaps: {
        form: 'el-form',
        formItem: 'el-form-item',
        input: 'el-input',
        number: 'el-input-number',
        select: Select,
        radio: Radio,
        checkbox: Checkbox,
        checkboxGroup: CheckboxGroup,
        cascader: 'el-cascader',
        switch: 'el-switch',
        slider: 'el-slider',
        timeSelect: 'el-time-select',
        datePicker: 'el-date-picker',
        colorPicker: 'el-color-picker'
    },
    defaultProps: {
        form: {
            size: 'mini',
            labelWidth: '80px'
        },
        number:{
            class: 'w-100',
            style: 'width: 100%;'
        }
    }
}