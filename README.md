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

4. CSS 如何实现switch按钮
    
    ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gAUU29mdHdhcmU6IFNuaXBhc3Rl/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAKQBFAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A3ans7G51G4W3tLeW6nf7sUKF2P0A5q14d0K68T67YaTZKGuryZYI89AWOMn2HU/Svr+20bTPhRpiaB4diWO7CD7bqZUefMxGcbuw746Dt3NRn2e4Xh/CPF4rbZJbt9kfm1DD+1i5ydor8+yPlYfDDxkQCPCWukHuNNm/+Jo/4Vf4z/6FLXf/AAWzf/E19JtcSvL5jSu0nXeWJP512XgrxrcRXkVjfStPBKQiSOcsjdhnuK/M8q8UMLj8VHDYih7JSdlLm5ld7X0Vvx89NTro4ahUmoyk1f0Pjr/hV/jP/oUtd/8ABbN/8TUdx8N/FtpC0s/hfWoYl5Z5NPmVR9SVr9E6K/XfrUux7H9h0/52fmUylWIIII4IPakr7O/aF+DGn+LvDl7runWqW+v2UbTs8SgfakXllf1bGSD14x34+Ma7adRVFdHz2Mwk8HU5Jap7MKKKK1OE9I/Z1lhi+M3hppyAhkmUZ/vGCQL/AOPEV9BeKFdPEepCTO7z3Iz6E5H6Yr4/0zUrnRtStb+zlMN1bSrNFIvVWU5B/MV9ZaH8Q9A+L2n291DeW2leJ1QJc6dcyCMSkd42PDe3fHXpk/k3iJkeKzjL4TwceaVN35Vu1Zp28/8Ag9T18LJVKDop+8ndeelvvIakt1d7iJY8+YWAXHrnir58MasJNn9nXJPqsZK/mOK7Lwb4ElsblL/UQFkTmKAHOD6t/hX855Tw3mWZ4uNCNGUVf3pNNKK66vr2W7OqjhatWaik0d3RRUVxcw2kLSzypDEvLPIwVR9Sa/sU+0EvZYYbOeS4IECRs0hbptA5z+FfmfX1V+0D+0Dpg0K78NeGrtL+7u1MN1ewNmOKM8MqsOGZhxkZABPfp8q16mGg4pt9T4rOMRCtUjCDvy3/AB/4YKKKK7D58KKKKACiiigAooooAKKKKACiiigD/9k=)

    实现思路：
    1. 首先清除checkbox的默认样式
    2. 定义checkbox的外观
    3. 利用伪元素生成一个圆形，作为switch的按钮，并添加transition动画
    4. 在checkbox状态改变时，将圆形向右移动一定距离

    清除checkbox样式的两种方法：
    1. 利用 `appearance` 属性。该属性目前是一个实验性属性，表示基于平台的原生UI样式，将该属性设置为 `none`即可清除默认样式。
    2. 利用 `visibility:hidden` 和 `display:none`

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: cadetblue;
        }
        input {
            position: relative;
            box-sizing: border-box;
            appearance: none;
            width: 50px;
            height: 25px;
            border-radius: 12px;
            background-color: #FFF;
            cursor: pointer;
        }
        input::after {
            position: absolute;
            top: 1px;
            left: 3px;
            content: "";
            width: 23px;
            height: 23px;
            border-radius: 50%;
            background-color: greenyellow;
            transition: 0.3s ease all;
        }
        input:checked::after{
            transform: translateX(23px);
        }
    </style>
    </head>
    <body>
    <input type="checkbox">
    </body>
    </html>
    ```
5. CSS如何实现黑暗模式

    关于黑暗模式实现，会另写一篇文章，详细分析。

6. li中包裹input会导致高度出现变化

    由于 input、texrarea 等表单元素自身具有border、padding，因此不仅是li，应该是所有块级元素中都会出现input高度比盒子稍高一点的情况，将所有元素的盒模型设置为 `box-sizing: border-box` 可以解决该问题

7. gap

    gap属性用来设置网格行与列之间的间隙，该属性是 `row-gap` 和 `col-gap` 的简写形式

    该属性可以用于flex、grid以及多列布局。

    多列布局是指div设置了column-count属性，column-count表示将一个盒子分为若干列

8. form、input等元素也可以使用text-align居中

    `text-align` 用于设置行内元素的对齐方式
    行内元素有：
    * b, big, i, small, tt
    * abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
    * a, bdo, br, img, map, object, q, script, span, sub, sup
    * button, input, label, select, textarea