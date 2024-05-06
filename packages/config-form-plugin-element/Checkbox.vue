<template>
<el-checkbox :value="value"
             v-bind="$attrs"
             v-on="$listeners"
></el-checkbox>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
        value: [String, Number, Boolean],
    },
};
</script>

<style scoped>

</style>