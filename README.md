# MERN Stack.

## React Hooks

Un Hook en react te permite "colgarte" o integrarte con el manejo de estado y los métodos del ciclo de vida de un componente, desde un componente funcional.

Existen 2 tipos de hooks: los predefinidos y los customs hooks.

Hooks básicos: 

> ***useState***: 
> 
> ```markdown
> Devuelve un valor con estado y una función para actualizarlo. 
> Acepta un argumento como el valor inicial del estado.
> ```

> ***useContext***: 
> 
> ```markdown
> Acepta un objeto de contexto (el valor devuelto de `React.createContext`) 
> y devuelve el valor de contexto actual. 
> El valor actual del contexto es determinado por la propiedad 
> `value` del `<MyContext.Provider>` ascendentemente más cercano 
> en el árbol al componente que hace la llamada.
> ```

> > ***createContext***: Crea un objeto Context. 
> 
> ```markdown
> Cuando React renderiza un componente que se suscribe a este 
> objeto Context.
> Este leerá el valor de contexto actual del Provider más cercano 
> en el árbol.
> ```

**Context** está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React

> useEffect: 
> 
> ```markdown
> la función que se pasa a useEffect se ejecutará sincrónicamente 
> antes de las etapas de layout y pintura
> ```
