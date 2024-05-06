<template>
    <el-checkbox-group :value="value"
                       v-bind="$attrs"
                       v-on="$listeners"
    >
        <el-checkbox-button v-for="item in optionsArr"
                            :key="typeof item !== 'object' ? item : item.value"
                            :label="typeof item !== 'object' ? item : item.value"
                            :disabled="typeof item !== 'object' ? false : item.disabled"
        >{{typeof item !== 'object' ? item : item.label}}</el-checkbox-button>
    </el-checkbox-group>
</template>

<script>
export default {
    name: "CheckboxGroup",
    props: {
        value: {
            type: Array,
            default: () => []
        },
        options: [Array, Function],
    },
    data(){
        return {
            optionsArr: Array.isArray(this.options) ? this.options : []
        }
    },
    watch: {
        options(val){
            if(Array.isArray(val)){
                this.optionsArr = val;
            }else if(typeof val === 'function'){
                this.getOptions();
            }
        }
    },
    mounted() {
        if(typeof this.options === 'function'){
            this.getOptions();
        }
    },
    methods:{
        getOptions(){
            this.options().then(res =>{
                this.optionsArr = res || [];
            }).catch(e=>{
                this.optionsArr = [];
            })
        }
    }
};
</script>

<style scoped>

</style>