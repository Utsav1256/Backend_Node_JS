# Backend_Node_JS

# Episode 1

## Internet
Q1) Jab mobile wire se connected nahi hai to message America ja kaise raha hai??
- Mobile se ek rays nikalti hai and wo nearest tower tak jati hai,
data moble form se bahar niklega in the tform of small packets
- and iss data ki itni kshamta nahi hoti hai ki ye kayi kilaometer tak ja chali jaye.

- Agar aap isi kai kilometer tak leke jaoge
to iski intensityh dhimi ho jati hai and data me aa jate hai errors.

- Tower recieved data in the from of packets 
- then it converts it to electrical signal
- then it gets tranferred through the wire (Optical Fibre)inside the ground from India via Ocean route to America.
- In America the nearest Tower tho the person which is the reciever gets the electrical signal
- then the Tower converts the electrical signal in form of packets, and sends it to the Receiver's device
- then the receiver recieves the message 

## ISP - Internet Service Provider (JIO, AIRTEL)


# Router
## IP Address | Mac Address

- Mobile phone connected hai wifi se and wifi connected hai internet se.

## What is server?
A computer system or server which is connected to the internet and programmed to serve(files or data) to other computers or software.


## Client Server Architecture??
Request aayi and uska response bheja, this whole network -> isiko kehte hai Client Server Architecture.

jo requst karta hai -> Client
jo response bhejta hai -> Server

## http | https
hyper text transfer protocol (http)
hyper text transfer protocol secure (https)

- http /https protocol ke bina tum na internet pe kuchh bhej sakte ho na kuchh manga sakte ho

- inka kaam hai data ko bhejna aur receive karwana

- jinhone internet ko banaya unhone kuchh set of rules banaya

- jitne bhi internet service providers hai wo sab inn rules ko follow karna padega
-  ye hamare haath me nahi hai ki hum rules follow na kare

- in http site 
- we can set extra dongle in another device and turn on the monitor mode,
Now I can check and see the message in the other device
- this is dangerous

https  - we cannot read that message bcz thiat message is encrypted

- kisi bhi server se connect hone keliye ports hote hai
- ports gate through which we can enter the server

- open ports | closed ports
- if some body is connected to that port, to hum uss port ko use nahi kar sakte
- random numbers like 3000, 1234
- wo no. hum apne mann se rakh sakte hai.

# Episode 2
## What is backend ?
Backend devloper wo banda hai joki server aur database program karta hai.
## Why backend ?
to amke websites more usable and purposefull for the audience, to make website dynamic (dynamic matlab alag alag users ko aap alag alag deta dikha sakte ho).
## Why not frintend alone ?
With frontend websites are static and they are not of much use.

## What do we need ?
node js, mongodb, mongoose js, express js

## What should we make to hit big companies??


## Install
install ka matlab hota hai aapke laptop / computer / tablet, etc mein files ko copy karna.

- c-drive me files ko copy karna after download of exe files  is called installation.

## import and export in js

script.js
```js
var a = 12;
module.exports = d;
```
script2.js
```js
var d = require('./script'); //jise export kiya wo require nahi karte hai,  jsi file se export kiya hai wo require karte hai
console.log(d);
```

jaha par aapka data hota hai waha se hota hai export
jaha pe use karna hota hai waha karna hota hai import

script.js
```js
var a = 12;
var b = 1334;
module.exports = a;
module.exports = b;
```

- galat hai kyu??
- kyuki ek file ek hi cheej export kar sakti hai.


script.js
```js
var a = 12;
var b = 1334;
module.exports = {first: a, second: b};
```
- aise karte hai

script2.js
```js
var data = require("./script")
```
- data me woaayega jo export kiya hai -> wo object ({first: a, second: b}).

- Node js hai khoob sara C++ ka code jo ki liya gaya hai chrome browser ke v8 engine ke code se,
aur iss c++ code jisko liya gaya usse wrap kar diya gaya js code se 
and ye hume allow karta hai ki hum js code likhen aur ye(js wrapper) js code accept karega and c++ ke basis par aapko ek server environment bana kar dega, 
par sirf tab tak jab tak aapka node(v8 engine + js wrapper) chalu hai.

## to run the code (using node)

- do this: 
node .\script.js

- npm init karne ki koi jarurat nahi hai run karne ke liye

## npm
- npm ek jagah hai jaha par khoob saare packages milte hai
- bani banaai cheejein / features kehlaate hai packages

- text to audio kaise karuuuuu??
- npm package for text to audio include karle re baba.

npm => packages ka playstore
packages => files of code\

jab aap node install karte ho to node ke saath npm bhi install ho jata hai.
to check `npm -v` (in cmd)

`npm i package_name`

## express
- its an npm package
- express ek framework hai for node.js
- use case :
- mainly for routing
- routing => 
https://www.facebook.com/profile

`/profile` -> route

alag alag route pe alag alag pages dikha paye, usko routing kehte hai

## routing methods -> GET POST PUT PATCH DELETE

jab bhi aap kuchh search karenge / form fill karenge / ya koi aisa route open karenge,
jisme aap chate hai ki URL pe data dikh jaye koi problem nahi hai,
aise route ko get route kehte hai.
- lekin jab aap chahte hai, ki aap apna email lekhe, aor password likhe to url pe data show na ho,
aise route kohum POST route kehete hai.
- GET route me data url me dikhta hai.
- POST route me data url me nahi dikhta hai.

```js
const express = require('express');
const app = express();

app.get('/profile', function(req, res) {
 res.send('hey');
})

app.listen(3000);
```
- node iss file ko chalane aayega
- aur use pata chalega achchha express keh raha hai ki server banao, aur 3000 port par listen karo.

http://localhost:3000/ jake dekho 

## nodemon

npm i nodemon -g

nodemon .\script.js

- kisi laptop me ho sakta hai ye error aaye
- cannot loaded because running scripts is dosabled on the system.
- to resolve:
npx nodemon .\script.js

## middleware

- server par request aane ke baad aur route tak pahuchne se pehle jo process hota hai uska naam hai middleware

```js
app.use(function(req, res, next) {
    console.log("hello from middleware);
    next();
})
```
- middleware ek aisa function hai jo kisi bhi route se pehle chalta hai,
- jiska matlab aapka route chalne se pehle agar aap koi kaam kareana chate ho to middleware ka upyog kiya ja sakta hai
- route pe chale se print karo chala
- route pe chale se hits counter ki value badhao
- iska matlab route chalne se pehle jo chalega wo hai middleware

- sirf ek dikkat hai, agar hamara middelware chal gaya to rewuest jaam ho jati hai aur route tak nahi ja pati
- to iske liye hume push karna hota hai
- by doint -> `next()`

Q) me kitne middle ware bana sakta hoon ?
-> kitne bhi.