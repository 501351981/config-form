<template>
    <span v-if="!group" class="config-form-radio">
        <el-radio v-for="item in optionsArr"
                  :key="typeof item !== 'object' ? item : item.value"
                  :value="value"
                  :label="typeof item !== 'object' ? item : item.value"
                  :disabled="typeof item !== 'object' ? false : item.disabled"
                  v-bind="$attrs"
                  v-on="$listeners"
        >{{typeof item !== 'object' ? item : item.label}}</el-radio>
    </span>
    <el-radio-group v-else
                    :value="value"
                    v-bind="$attrs"
                    v-on="$listeners"
    >
        <el-radio-button v-for="item in optionsArr"
                         :key="typeof item !== 'object' ? item : item.value"
                         :label="typeof item !== 'object' ? item : item.value"
                         :disabled="typeof item !== 'object' ? false : item.disabled"
        >{{typeof item !== 'object' ? item : item.label}}</el-radio-button>
    </el-radio-group>
</template>

<script>
export default {
    name: "Radio",
    props: {
        value: [String, Number, Boolean],
        options: [Array, Function],
        group: {
            type: Boolean,
            default: false
        }
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
        },
        inputChange(val){
            this.$emit('input', val)
        }
    }
};
</script>

<style scoped>

</style>