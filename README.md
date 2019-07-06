# R.O.T. ID Verification
[![Build Status](https://travis-ci.org/afulsamet/tc-id-verification.svg?branch=master)](https://travis-ci.org/afulsamet/tc-id-verification)

The Republic of Turkey ID Verification with **SOAP** Client

## Installation
`npm install tc-id-verification --save`

## Quick Start
Create new instance as name **TCID** and use properties of instance.
```javascript
const { TCID } = require("tc-id-verification")

const tcid = new TCID();
```

### Arguments
```javascript
const args = {
  TCKimlikNo: 11223344556, // R.O.T. ID Number
  Ad: "afulsamet", // First Name
  Soyad: "doe", // Last Name
  DogumYili: 1992 // Birth Day
}
```

### First way(Async/Await)
```javascript
(async () => {
    const verif = await tcid.verif(args)
    console.log(verif)
})()
```
### Second way(Callback)
```javascript
const verif = tcid.verif(args, (error, result) =>
    console.log(result)
)
```

**Output will be**
```json
{
  "verify": false,
  "ops": {
    "TCKimlikNo": 11223344556,
    "Ad": "AFULSAMET",
    "Soyad": "DOE",
    "DogumYili": 1992
  }
}
```

## Docs
- **TCID** - Class
  - **verify(args: IArgs, callback?: Callback)** - Object

- **IArgs** - Interface
  - **TCKimlikNo** - number
  - **Ad** - string
  - **Soyad** - string
  - **DogumYili** - number
- **Callback** - void
  - **error** - Interface
    - **err** - Object
  - **result** - Interface
    - **verify** - boolean
    - **ops** - IArgs
  
## Dependencies
* [typescript - TypeScript is a language for application-scale JavaScript.](https://www.npmjs.com/package/typescript)
* [soap - A SOAP client and server for node.js.](https://www.npmjs.com/package/soap)

## License not have yet
Licence not have yet, because the project is not wide.
