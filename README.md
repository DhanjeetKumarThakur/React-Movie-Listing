# React Learning Project 
- We going to note down here the things which are either important or new to us. So next time when we want to revise topics will just go through this file to get over-view.
- Let's start with this simple example 
```js
export function About() {
    return (
        <>
            <h1> About Us</h1>
        </>
    )
}

function Home() {
    return (
        <>
            <h1> Welcome To React World </h1>
        </>
    )
}

export default Home
```
Here there are two components `Home` and `About`
```js
import Home, { About } from './components/Home'

function App() {
    return(
        <>
            <Home />
            <About />
        </>     
    )
}
```

**Note:** 
- The difference in the import statements 
```js
import Home, { About } from './components/Home'
```
It is because of the way we use export key, while exporting the `About` we have not used the `default` keyword so while importing the component we used `{}` this is called **Named Export*  eg `{About}` whereas `Home` is called **Default export** 
