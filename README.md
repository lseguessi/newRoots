# NewRoots

A web App for show who is the best user with points.

![Imagem tela inicial da aplicação com um fundo de montanha e com 3 cards brancos com informações de usuários](https://uploaddeimagens.com.br/images/003/780/401/original/Screen_Shot_2022-03-18_at_13.58.35.png?1647622731)

## Installation

Use the package manager [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/package/npm) to install dependencies.

```bash
yarn 
or
npm i
```

## Usage

```javascript
yarn dev
server run on http://localhost:3000/
close the server, hit ctrl+c
```

## Modification on project
```
1 - The level guide is not complety with four grades, the backend provide us just 3 of then, 
    because of this i decide to use just 3 levels and center all in a div.

2 - The acitivities list came all the same results, i dont undesrstande why, 
    but i make a render list with the icons i have in the prototype.

3 - The background imagem, i cant use from bing because we have problem with CORS on API. 
    Instead i use unsplash for images on background, and they changes as we change the size of windows.

4 - I dicede to center the first card, and when the user selecter a profile, i open the two other cards 
    and center all of then in the windows size.
```