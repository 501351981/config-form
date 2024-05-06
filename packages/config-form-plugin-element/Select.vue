<template>
    <el-select
        v-bind="$attrs"
        v-on="$listeners"
        @visible-change="visibleChange"
    >
        <el-option v-for="item in optionsArr"
                   :key="typeof item !== 'object' ? item : item.value"
                   :label="typeof item !== 'object' ? item : item.label"
                   :value="typeof item !== 'object' ? item : item.value"
                   :disabled="typeof item !== 'object' ? false : item.disabled"
        >

        </el-option>
    </el-select>
</template>

<script>
export default {
    name: "Select",
    props:{
        options: [Array, Function],
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            optionsArr: Array.isArray(this.options) ? this.options : []
        }
    },
    mounted() {
        if(typeof this.options === 'function' && !this.lazy){
            this.getOptions('init');
        }
    },
    watch: {
        options(val){
            if(Array.isArray(val)){
                this.optionsArr = val;
            }else if(typeof val === 'function'){
                this.getOptions('init');
            }
        }
    },
    methods:{
        getOptions(type){
            this.options(type).then(res =>{
                this.optionsArr = res || [];
            }).catch(e=>{
                this.optionsArr = [];
            })
        },
        visibleChange(visible){
            if(visible && typeof this.options === 'function' ){
                this.getOptions('visible');
            }
        }
    }
};
</script>

<style scoped>

</style>