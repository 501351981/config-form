<template>
    <component
        :is="componentMaps['form'] || 'el-form'"
        :model="model"
        :rules="rules"
        class="config-form"
        v-bind="{...defaultProps['form'], ...$attrs}"
    >
        <slot>
            <template v-for="formItem in formItems">
                <component
                    v-if="typeof formItem.hidden === 'function' ? !formItem.hidden(model) : !formItem.hidden"
                    :key="formItem.prop"
                    :is="componentMaps['formItem'] || 'el-form-item'"
                    v-bind="{...defaultProps['formItem'], ...formItem.formItemProps}"
                    :prop="formItem.prop"
                    :label="formItem.label"
                >
                    <template v-if="$slots[`${formItem.prop}-label`]" slot="label">
                        <slot :name="`${formItem.prop}-label`">{{formItem.label}}</slot>
                    </template>
                    <template v-if="$slots[`${formItem.prop}`]">
                        <slot :name="`${formItem.prop}`"></slot>
                    </template>
                    <component v-else
                               :is="typeof formItem.component === 'string' ? componentMaps[formItem.component] : formItem.component"
                               v-bind="{
                            ...(typeof formItem.component === 'string' ? defaultProps[formItem.component] : {}),
                            ...formItem.componentProps}"
                               v-on="formItem.componentEvents"
                               v-model="model[formItem.prop]"
                               :disabled="
                               typeof formItem.disabled === 'function'
                               ? formItem.disabled(model)
                               : !!formItem.disabled || formItem.componentProps?.disabled"
                    ></component>

                </component>
            </template>
        </slot>
    </component>
</template>

<script>
import {getCache} from "./cache";

export default {
    name: "ConfigForm",
    provide(){
        return {
            getConfig: this.getConfig,
            getModel: this.getModel
        }
    },
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        fields: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            configFormOptions: getCache('options')
        };
    },
    computed:{
        componentMaps(){
            return this.configFormOptions['componentMaps'] || {};
        },
        defaultProps(){
            return this.configFormOptions['defaultProps'] || {};
        },
        formItems(){
            return Object.keys(this.fields).map(key=>{
                let {rules, ...others} = this.fields[key]
                return {
                    prop: key,
                    ...others
                }
            })
        },
        rules(){
            return Object.keys(this.fields).reduce((allRules, key)=>{

                let {rules, ...others} = this.fields[key]
                if(rules){
                    allRules[key] = [...rules];
                }
                return allRules
            }, {})
        }
    },
    methods:{
        getConfig(){
            return {
                componentMaps: this.componentMaps,
                defaultProps: this.defaultProps,
                formItems: this.formItems,
                rules: this.rules
            }
        },
        getModel(){
            return this.model;
        }
    }
};
</script>

<style scoped>

</style>