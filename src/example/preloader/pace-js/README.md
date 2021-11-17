# pace-js  (進度條)說明

## 基本用法

```
<head>
<script src="/pace/pace.js"></script>

<link href="/pace/themes/pace-theme-barber-shop.css" rel="stylesheet" />
</head>
```

## 配置
Pace.js会自动加载到页面中，不需要挂接到任何代码，会自动检测进度。如果你想做一些调整，你可以设置window.paceOptions来自定义配置：

设置window.paceOptions ：
```
paceOptions = {
    ajax: false,
    restartOnRequestAfter: false,
    elements: false,
    elements: { selectors: ['.timeline,.timeline-error', '.user-profile,.profile-error'] },
    eventLag: false,
    document: false,
    
}


```
script标签中配置参数:
```
<script data-pace-options='{ "ajax": false }' src='pace.js'></script>
<pre>
```

## API

Pace.start：开始显示进度条，如果你不是使用AMD或者Browserify来加载模块的话，这个会默认执行。

Pace.restart：进度条重新加载以及显示。

Pace.stop：隐藏进度条以及停止加载。

Pace.track：监测一个或者多个请求任务。

Pace.ignore：忽略一个或者多个请求任务。

## Events

start: When pace is initially started, or as a part of a restart
stop: When pace is manually stopped, or as a part of a restart
restart: When pace is restarted (manually, or by a new AJAX request)
done: When pace is finished
hide: When the pace is hidden (can be later than done, based on ghostTime and minTime)

`Pace.on(event, handler, [context])`

`Pace.off(event, [handler])
`

`Pace.once(event, handler, [context])`

## Tracking 追蹤

`Pace.options = { ajax: false }`

`Pace.options = { restartOnRequestAfter: false }`

`Pace.ignore(function(){ $.ajax(...) });
`

`Pace.track(function(){ $.ajax(...) });
`

`Pace.options = { ajax: { ignoreURLs: ['some-substring', /some-regexp/] } }
`

如果你使用AMD或者Browserify来加载模块的话，你可以通过这样子来设置（例如：start）：
```
define(['pace'], function(pace){
    pace.start({
        document: false
    });
});
```