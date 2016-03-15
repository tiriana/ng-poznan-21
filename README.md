Co zostało zrobione
=============

```
npm init
npm install express --save
```
Stworzenie prostego API zwracającego itemy o strukturze:
```
{
   face: 'ᕦ( ͡° ͜ʖ ͡°)ᕤ',
   description: 'Cillum adipisicing officia nulla aute minim minim eu exercitation.',
   name: 'Berrychanter Fright',
   img: '//fillmurray.com/100/100'
}
```

Serwer
===
Działa na porcie ```3000```, uruchamiany poleceniem ```npm start```

API
===
* ```/api``` wypisuje komunikat
* ```/api/items``` zwraca tablicę z itemami w formacie JSON
* ```/api/item/:itemId``` zwraca item o id ```itemId``` w formacie JSON
