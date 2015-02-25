# rmscripts

## Why?

I needed a way to remove `<script>` tags from a body of text in response to issue [#139](https://github.com/Polymer/vulcanize/issues/138) with [Polymer/vulcanize](https://github.com/Polymer/vulcanize).

## How?

```
npm install rmscripts -g

```

```
cat vulcanize.html | rmscripts
```