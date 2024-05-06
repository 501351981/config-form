本项目期望推动一种更优雅的表单开发范式：
- 通过配置数据驱动表单生成
- 表单的布局和样式与数据分离

# 组件最终使用效果

## 最简示例

下面是一个最简单的使用方式，通过fields配置一个表单有哪些表单项，每个表单项使用什么类型的表单，通过这样简单的配置就可以驱动生成一个表单，简化了Dom相关代码。

```vue
<template>
    <config-form
        :model="formData"
        :fields="fields"
    />
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            formData: {
                name: '',
                age: 18,
                sex: 1
            },
            fields: {
                name: {
                    label: '姓名',
                    component: 'input'
                },
                age: {
                    label: '年龄',
                    component: 'number',
                },
                sex: {
                    label: '性别',
                    component: 'select'
                }
            }
        };
    }
};
</script>
```
表单项组件可能有不同的属性，比如input组件可能需要配置type、placeholder等属性，我们把所有组件的属性配置都放到componentProps中；同样地，如果需要监听组件的事件，配置componentEvents即可。

```javascript
const fields = {
    name: {
        label: '姓名',
        component: 'input',
        componentProps: {
            type: 'textarea',
            placeholder: '请输入您的大名'
        },
        componenetEvents:{
            input: (value)=>{
               console.log('组件发生了input事件', value); 
            }
        }
    }
}
```

另外表单项的校验规则也放到fields中配置，这样就把一个表单项的所有配置集中到了一起，更加的高内聚。

```javascript
const fields = {
    name: {
        label: '姓名',
        component: 'input',
        rules: [{required: true, message: '姓名不能为空'}]
    }
}
```

## 组件联动

不同表单项之间可能有一些联动关系，比如当姓名为空时禁用年龄的编辑，只需要通过配置表单项的disabled属性即可，disabled属性支持Boolean和Function两种，其中函数的参数对当前表单的model值。

```javascript
const fields = {
    name: {
        label: '姓名',
        component: 'input'
    },
    age: {
        label: '年龄',
        component: 'number',
        disabled: (formData) => !formData.name
    }
}
```

如果想要配置没有输入name时隐藏age表单项也非常简单，只需要配置hidden即可，和disabled类似。
```javascript
const fields = {
    name: {
        label: '姓名',
        component: 'input'
    },
    age: {
        label: '年龄',
        component: 'number',
        hidden: (formData) => !formData.name
    }
}
```

## 自定义表单项

如果某个表单项比较复杂，你也可以将其封装成单独的组件，只要支持双向绑定v-model，就可以和配置表单无缝结合。

```javascript
import CustomComponent from './CustomComponent.vue'
const fields = {
    name: {
        label: '姓名',
        component: CustomComponent
    }
}
```

希望大家能将复杂的表单项封装成组件供表单组件使用，内不是在一个表单组件内，编写大量的关于某个表单项的实现细节代码。

## 插槽

我推荐大家能将特殊的表单项封装成组件进行使用，然而有时可能确实没必要，那么也支持插槽方式进行扩展。

如果要定制表单项label的实现，可以使用名为 '属性名-label'的插槽进行扩展，以表单项name为例，就是 slot="name-label"。

如果要定制表单项的实现，则使用名为属性名的插槽。

```vue
<template>
    <config-form
        :model="formData"
        :fields="fields"
    >
        <template slot="name-label">
            <span style="color:red;">您的大名</span>
        </template>
        <template slot="name">
            <input v-model="formData.name" /> <i class="el-icon-question"></i>
        </template>
    </config-form>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            formData: {
                name: ''
            },
            fields: {
                name: {
                    label: '姓名',
                }
            }
        };
    }
};
</script>
```

## 自定义表单布局

默认表单布局非常简单，如果你需要特殊的布局，则可以使用如下方式：
- ConfigForm组件的默认插槽就是自定义布局，如果使用了自定义布局，则会完全按照自定义布局的位置去渲染每个表单项
- 使用ConfigFormItem来进行表单的占位，这里仅仅表示表单项的位置，不涉及如何渲染这个表单项，表单项渲染仍然可以根据配置生成

```vue
<template>
    <config-form
        :model="formData"
        :fields="fields"
    >
        <el-row>
            <el-col :span="24">
                <!--这里只需要占位，具体渲染成input还是别的，由配置决定-->
                <config-form-item prop="name"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <config-form-item prop="age"/>
            </el-col>
            <el-col :span="12">
                <config-form-item prop="sex"/>
            </el-col>
        </el-row>
    </config-form>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            formData: {
                name: ''
            },
            fields: {
                name: {
                    label: '姓名',
                    component: 'input'
                },
                age: {
                    label: '年龄',
                    component: 'input'
                },
                sex: {
                    label: '性别',
                    component: 'radio',
                    componentProps: {
                        options: [
                            {label: '男', value: 0},
                            {label: '女', value: 1},
                        ]
                    }
                }
            }
        };
    }
};
</script>
```
通过这种方式将表单的UI布局 和 数据配置分离开来。

当然了，ConfigFormItem也是支持插槽的，可以自定义label和表单内容。

```vue
<template>
    <config-form
        :model="formData"
        :fields="fields"
    >
        <config-form-item prop="name">
            <template slot="label">您的大名</template>
            <input v-model="formData.name"/>
        </config-form-item>
    </config-form>
</template>
```

# 如何在项目中使用

## Vue2中使用

vue2中，目前需要借助ElementUI，确保项目中已经使用了ElementUI。

**安装依赖：**

```shell
npm i @config-form/v2 @config-form/plugin-element
```

**main.js中引入：**

```javascript
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ConfigForm from "@config-form/v2";
import ConfigFormPluginElement from '@config-form/plugin-element'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(ConfigForm, {
    presets: [ConfigFormPluginElement],
    componentMaps: {
        //自定义组件支持的类型
        yourComponentName: Component,
    },
    //设置每个组件的默认样式
    defaultProps: {
        form: {
            labelWidth: '120px'
        }
    }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

```

本库支持基于各种不同的组件库，来实现具体的表单项，目前已经封装了element相关的配置，可以通过引入@config-form/plugin-element直接使用。

也可以自定义扩展本库，可以通过componentMaps指定组件名称和组件的对应关系。

```javascript
import MyComponent from 'MyComponent.vue'

Vue.use(ConfigForm, {
    presets: [ConfigFormPluginElement],
    componentMaps: {
        input: 'el-input', //此处仅演示，项目中无需配置此项，在ConfigFormPluginElement已经配置好了
        yourComponentName: MyComponent, //自定义组件名称和组件的映射关系
    }
})
```

在进行上述配置后，后续fields中将表单项的component配置为'yourComponentName'时，则会渲染成为MyComponent组件。

```javascript
const fields = {
    name: {
        label: '姓名',
        component: 'yourComponentName' //渲染成为MyComponent组件
    },
}
```

除了配置组件名称和组件的映射关系，还可以配置每个组件的默认值，简化表单中的配置。

比如如下配置会将所有input的默认最大长度设为300，无需在每个表单中进行重复配置。
```javascript
Vue.use(ConfigForm, {
    defaultProps:{
        input:{
            maxLength: 300
        }
    }
});
```

**项目中使用：**

直接在项目中使用ConfigForm组件即可，参考上面展示的示例。

```vue
<template>
    <config-form :model="formData" :fields="fields"/>
</template>
```

## Vue3中使用


vue3中，目前需要借助Element Plus，确保项目中已经使用了Element Plus组件库，否则需要自己进行组件名称和组件的映射配置。

**安装依赖：**

```shell
npm i @config-form/v3 @config-form/plugin-element
```

**main.js中引入：**

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ConfigForm from "@config-form/v3";
import ConfigFormPluginElement from '@config-form/plugin-element';

const app = createApp(App)

app.use(ElementPlus)

app.use(ConfigForm, {
    presets: [ConfigFormPluginElement],
    componentMaps: {
        //自定义组件支持的类型
        yourComponentName: Component,
    },
    //设置每个组件的默认样式
    defaultProps: {
        form: {
            labelWidth: '120px'
        }
    }
})
app.mount('#app')
```

> 如果要支持其他不同类型的组件库，只需要参照@config-form/plugin-element实现一份即可，本项目通过此方式解决对不同组件库的扩展问题，欢迎大家补充
