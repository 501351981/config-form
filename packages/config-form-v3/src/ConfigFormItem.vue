<template>
    <component
        v-if="formItem"
        :is="componentMaps['formItem']"
        :prop="prop"
        :label="formItem.label"
    >
        <template slot="label">
            <slot name="label">{{ formItem.label }}</slot>
        </template>
        <slot>
            <component
                :is="typeof formItem.component === 'string' ? componentMaps[formItem.component] : formItem.component"
                v-bind="{
                    ...(typeof formItem.component === 'string' ? defaultProps[formItem.component] : {}),
                    ...formItem.componentProps}"
                v-on="formItem.componentEvents"
                v-model="model[formItem.prop]"
                :disabled="typeof formItem.disabled === 'function' ? formItem.disabled(model) : !!formItem.disabled"
            ></component>
        </slot>
    </component>
</template>

<script>
export default {
    name: "ConfigFormItem",
    props: ['prop'],
    inject: ['getModel', 'getConfig'],
    data(){
        return {
            componentMaps: {},
            defaultProps: {},
            formItems: [],
            model: {}
        }
    },
    computed:{
      formItem(){
          return this.formItems.find(item => item.prop === this.prop);
      }
    },
    mounted() {
        let {componentMaps,defaultProps,formItems} = this.getConfig();
        this.componentMaps = componentMaps;
        this.defaultProps = defaultProps;
        this.formItems = formItems;

        this.model = this.getModel();
    }
};
</script>

<style scoped>

</style>