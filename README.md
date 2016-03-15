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

Następnie
=========
```
sudo npm install gulp -g
npm install gulp browserify tsify vinyl-source-stream  --save-dev
```
Dodałem watcha, który niestety wywala się na błędach z typescript. Załatwiam sprawę komendą:
```
while [ 1 ]; do gulp watch; sleep 3; done
```

Dodaję livereload
```npm isntall gulp-livereload --save-dev```
