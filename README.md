# metaphone3
This is Lawrence Philips's metaphone3 implementation ported/transpiled using [cincheo/jsweet](https://github.com/cincheo/jsweet). 

You can find the original in [OpenRefine's repo here](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/clustering/binning/Metaphone3.java)

## Install
```bash
npm install metaphone3
```

## Usage
```ts
import { metaphone3 } from '.';

metaphone3('Amin');         // => [ 'AMN', undefined ]
metaphone3('iron');         // => [ 'ARN', undefined ]
metaphone3('witz');         // => [ 'TS', 'FX' ]
metaphone3('');             // => [ '', undefined ]
metaphone3('VILLASENOR');   // => [ 'FLSNR', 'FSNR' ]
metaphone3('GUILLERMINA');  // => [ 'KRMN', undefined ]
metaphone3('PADILLA');      // => [ 'PTL', 'PT' ]
metaphone3('BJORK');        // => [ 'PRK', undefined ]
metaphone3('belle');        // => [ 'PL', undefined ]
metaphone3('ERICH');        // => [ 'ARK', 'ARX' ]
metaphone3('CROCE');        // => [ 'KRX', 'KRS' ]
metaphone3('GLOWACKI');     // => [ 'KLK', 'KLFSK' ]
metaphone3('qing');         // => [ 'XNK', undefined ]
metaphone3('tsing');        // => [ 'XNK', undefined ]

metaphone3('Guillermo', { encodeExact: true, encodeVowels: true });
// => [ 'GARMA', undefined ]
```

