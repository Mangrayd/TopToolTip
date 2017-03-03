# TopToolTip (module)

## Installation
Add jQuery into your project
```
<script src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
```

Add TopToolTip
```
<script src="TopToolTip.js"></script>
```

## Usage
Script select element with attributes `{rel}` and `{title}`
Attribute `{rel}` must be `{tooltip}`

Create HTML code like this
```
<div>the line needs clarification <span rel="tooltip" title="text of the hint">?</span></div>
```
and call TopToolTip with options you need
```
<script>
    ToolTip(null, {speed:200, hintMaxWidth:100, hintClass: 'hint'});
</script>
```
that's all

## API

TopToolTip(element,options)

## License

  (The MIT License)
  Copyright(c) 2012 Name Surname &lt;my_email@my_domen.com&gt;
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  'Software'), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
