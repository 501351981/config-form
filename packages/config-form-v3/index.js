import ConfigForm from './src/ConfigForm.vue';
import ConfigFormItem from "./src/ConfigFormItem.vue";
import {setCache} from "./src/cache";
import cloneDeep from "lodash/cloneDeep";
import omit from "lodash/omit";

function isObject(source){
    return typeof source === 'object' && source !== null;
}
function mergeObj(target, source){
    Object.keys(source).forEach(key =>{
        if(!target.hasOwnProperty(key)){
            target[key] = cloneDeep(source[key])
        }else if(isObject(source[key]) && isObject(target[key])){
            mergeObj(target[key], source[key])
        }else{
            target[key] = cloneDeep(source[key])
        }
    })
}
ConfigForm.install = function (Vue, options) {
    if(!options){
        throw new Error('ConfigForm必须配置options');
        return;
    }
    let presets = options.presets || [];
    let mergeOptions = {};
    presets.forEach(preset =>{
        mergeObj(mergeOptions, preset);
    })
    mergeObj(mergeOptions, omit(options, ['presets']));
    setCache('options', mergeOptions);
    Vue.component(ConfigForm.name, ConfigForm);
    Vue.component(ConfigFormItem.name, ConfigFormItem);
};

export default ConfigForm;