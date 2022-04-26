## vscode + vite + vue3 + ts + eslint + stylelint 代码自动格式化

> 使用 vite 创建的 vue3 项目有点简陋，很多功能都没有。所以本文将讲解一下如何对 vite + vue3 项目配置代码自动格式化。配置完成后的效果如下图所示：

###安装 VSCode 插件
打开 VSCode，安装以下插件：

```
eslint
stylelint
volar
```

### 打开 VSCode 配置文件（Maccommand + shift + p，windowsctrl + shift + p，输入settings）。

### 在配置文件中加入以下代码：

```
"editor.codeActionsOnSave": {
    "source.fixAll": true,
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript"
],
"eslint.alwaysShowStatus": true,
"stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "vue",
    "sass"
],
```

### 安装项目依赖:

```
npm i -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-typescript eslint-plugin-vue husky sass stylelint stylelint-config-standard stylelint-scss typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser
```

> 注意，有些依赖版本对不上的时候，会造成格式化失败。例如 eslint 插件使用 8.0 版本以上格式化就报错，后来使用的是 7.0 的版本。安装后的具体版本如下：

```
"@typescript-eslint/eslint-plugin": "^5.1.0",
"@typescript-eslint/parser": "^5.1.0",
"eslint": "^7.2.0",
"eslint-config-airbnb-base": "^14.2.1",
"eslint-plugin-import": "^2.25.2",
"eslint-plugin-typescript": "^0.14.0",
"eslint-plugin-vue": "^7.20.0",
"husky": "^4.2.3",
"sass": "^1.43.3",
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
"stylelint-scss": "^3.21.0",
"typescript": "^4.4.3",
"vue-eslint-parser": "^7.11.0",
```

> 建议大家直接复制上面的代码到 package.json 文件中再下载。

### 配置.eslintrc.js``.stylelintrc.js文件
  我的 eslint 配置是基于 airbnb 规范的， css 规范用的是官方插件。

.eslintrc.js文件
```
module.exports = {
    root: true,
    globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'airbnb-base',      
    ],
    parser: 'vue-eslint-parser',
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    },
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-bitwise': 'off',
        'no-tabs': 'off',
        'array-element-newline': ['error', 'consistent'],
        indent: ['error', 4, { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', 120],
        'no-new': 'off',
        'linebreak-style': 'off',
        'import/extensions': 'off',
        'eol-last': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'import/no-cycle': 'off',
        'arrow-parens': 'off',
        semi: ['error', 'never'],
        eqeqeq: 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'no-continue': 'off',
        'prefer-destructuring': 'off',
        'no-plusplus': 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-prototype-builtins': 'off',
        'consistent-return': 'off',
        'vue/require-component-is': 'off',
        'prefer-template': 'off',
        'one-var-declaration-per-line': 'off',
        'one-var': 'off',
        'import/named': 'off',
        'object-curly-newline': 'off',
        'default-case': 'off',
        'import/order': 'off',
        'no-trailing-spaces': 'off',
        'func-names': 'off',
        radix: 'off',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'no-mixed-operators': 'off',
        'no-await-in-loop': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'no-case-declarations': 'off',
        'template-curly-spacing': 'off',
        'vue/valid-v-for': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-empty': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'guard-for-in': 'off',
        '@typescript-eslint/ban-types': 'off',
        'class-methods-use-this': 'off',
        'no-return-await': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': ['warn', {
            singleline: {
                max: 3,
                allowFirstLine: true,
            },      
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/singleline-html-element-content-newline': 'off',
    },
}
```
.stylelintrc.js文件
```
module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'indentation': 4,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source':null,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
    }
}
```
### 踩坑
Unknown word (CssSyntaxError)错误
这个错误是因为安装的插件stylelint``stylelint-config-standard``stylelint-scss版本太新的问题，对于 vue3 模板文件的支持不是很好，不能正确识别.vue文件的 css 代码。所以将以上三个插件的版本降一个大版本就好了，最后的版本如下：
```
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
"stylelint-scss": "^3.21.0",
```
另一种解决方案是安装postcss-html插件，但是stylelint14 版本的插件有很多问题，验证规则也和之前不太一样，并且.scss文件还验证不了。最后没找到解决方案，建议还是将版本降级比较好。

同时需要将 VSCode 的stylelint插件降级，现在插件的最新版本是 1.0.3，不支持stylelint13 版本。点击插件旁边的小齿轮，再点Install Another Version，选择其他版本进行安装。
选0.87.6版本安装就可以了，这时 css 自动格式化功能恢复正常。

### 忽略.vue文件中的 HTML 模板验证规则无效
举个例子，如果你将 HTML 模板每行的代码文本长度设为 100，当超过这个长度后 eslint 将会报错。此时如果你还是想超过这个长度，可以选择忽略这个规则：
```
/* eslint-disable max-len */
```
注意，以上这行忽略验证的代码是不会生效的，因为这个注释是 JavaScript 注释，我们需要将注释改为 HTML 格式，这样忽略验证才会生效：
```
<!-- eslint-disable max-len -->
```
总结
这样配置完成之后，基本上 vue3 项目里的代码都能格式化了（css js html 及各种衍生代码）。没有使用 prettier 是因为不够自由，而且它的功能已经可以由 eslint stylelint 来代替了。