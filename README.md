# Summarize

1. 在项目建立时，首先要建立全局样式

    全局样式包括通过用元素的基础样式设置，样式清零设置

2. max-width & width

    max-width：指元素的最大宽度，当 width 的宽度超过最大宽度时，max-width 生效，而width 不生效

    当p、h标签中文字过长时，设定 max-width 可以使文字换行

    |  属性   | 含义  |
    |  :----:  | :----:  |
    | px  | 绝对长度 |
    | auto  | 浏览器为指定的元素计算并选择一个宽度 |
    | max-content  | 内容的宽度，若是一句话，就是该句话的宽度 |
    | min-content  | 内容的最小宽度，内容较长时会出现换行 |
    | fit-content  | 取min-content和(max-content, 可用宽度)中的较大值 |


3. css中如何使用变量

    对于经常使用到的颜色、高度等值，可以将其写成变量的形式。

    CSS变量 --> `--height: 50px`，具有继承性

    对于全局CSS变量，可以放在`:root {--width: 200px}` 中，局部变量则放在相应的容器中 `div {--color: #fff}`

4. CSS如何实现黑暗模式
5. CSS 如何实现滑动按钮
5. li中包裹input会导致高度出现变化

    由于 input、texrarea 等表单元素自身具有border、padding，因此不仅是li，应该是所有块级元素中都会出现input高度比盒子稍高一点的情况，将所有元素的盒模型设置为 `box-sizing: border-box` 可以解决该问题

6. checkbox样式修改 appearance
7. flex: gap
8. form、input等元素也可以使用text-align居中