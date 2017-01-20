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
  
Foundation UI jQuery plugin is activated.  

You can use Foundation JS object as well. For example:

```js
import 'foundation-sites';
new Foundation.Accordion($('.accordion'));
```
  
    
  Note that you should 
```
import foundation-sites
```
at each
module where you want to use Foundation object. 

### Configuring Foundation-UI styles
You can define what Foundation styles to include in ```src/styles/theme.scss``` 
More on this: http://foundation.zurb.com/sites/docs/sass.html
  
##### You can also change Foundation style variables in ```src/styles/foundation-settings/settings.scss``` file

## Adding New Content After Page Load
If you add new content after the page has been loaded, you will need to reinitialize the Foundation JavaScript by running the following:
```js $(document).foundation();```  
  
Reflow will make Foundation check the DOM for any elements and re-apply any listeners to them.
```js $(document).foundation('reflow');```  
  
To be efficient, target the actual Foundation plugin you need to reflow:

```js $(document).foundation('orbit', 'reflow');```  
or  
```js $(document).foundation('tab', 'reflow');```  
or  
```js $(document).foundation('interchange', 'reflow');```
etc...  

http://foundation.zurb.com/sites/docs/v/5.5.3/javascript.html

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
