# vuejs-foundation-ui

> Vue.js Foundation front-end framework boilerplate

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Using Foundation-UI
Foundation-UI styles are set using ```src/styles/themes.css``` file 
  
You can use Foundation-UI JS as well. For example:

```js
import 'foundation-sites';
new Foundation.Accordion($('.accordion'));
```
  
    
  Note that you should 
```
import foundation-sites
```
at each
module where you want to use Foundation-UI JS. 

### Configuring Foundation-UI styles
You can define what Foundation styles to include in ```src/styles/theme.scss``` 
More on this: http://foundation.zurb.com/sites/docs/sass.html
  
##### You can also change Foundation style variables in ```src/styles/foundation-settings/settings.scss``` file

## Using Sass

You can write Sass style directly at you Vue components like this:
```
<style lang="sass">
  h2 {
    border: 2px solid aquamarine;
  }
</style>
```
or  
import scss styles from your styles folder

```
<style lang="sass">
  @import "~styles/border"
</style>
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
