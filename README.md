# jQuery.formval.js

## What is this?

This is the jQuery plugin that provides `$el.val()` for `<form>` element.

Gets/sets all input values and gets/sets each them.

## Usage

### Install

Include `jquery.formval.js` with jQuery. (You can use this with Zepto.js.)

```html
<script src="jquery.js"></script>
<script src="jquery.formval.js"></script>
```

### Sample HTML

Any sample JavaScript codes are used for these HTML:

```html
<form id="the-form">
  <input type="text" name="name" />
  <input type="number" name="age" />
  <input type="checkbox" name="language" value="en" />
  <input type="checkbox" name="language" value="ja" />
  <input type="radio" name="sex" value="male" />
  <input type="radio" name="sex" value="female" />
  <input type="radio" name="sex" value="other" />
  <select name="country">
    <option value="us">U.S.</option>
    <option value="jp">Japan</option>
    <option value="other">(Others)</option>
  </select>
  <textarea name="comment"></textarea>
</form>
```

### Get all

```js
var $form = $('#the-form');
var values = $form.val();
```

### Set all

```js
var $form = $('#the-form');
var values = {
  name:     'Takanashi Ginpei',
  age:      30,
  language: ['en', 'ja'],
  sex:      'male',
  country:  'jp',
  comment:  'Hello world!\nThis is Ginpei speaking.'
};
$form.val(values);
```

### Set one

```js
var $form = $('#the-form');
var name = 'Takanashi Ginpei';
$form.val('name', name);
```

### Get one

```js
var $form = $('#the-form');
var name = $form.val('name');
```

## Author

* Takanashi Ginpei
* [@ginpei_jp](https://twitter.com/ginpei_jp) (Japanese)
* [@ginpei_en](https://twitter.com/ginpei_en) (English)
* [Ginpen.com](http://ginpen.com/) (Japanese)

## License

Released under [The MIT License](http://opensource.org/licenses/MIT).
