import './server';

import * as Shared from '../../shared/src';

console.log('test project');

console.log('"a" value must be hot reloaded:', Shared.a); // COMMENT ME TO TEST HOT RELOAD [0]

const b: Shared.B = {
    a: 4, // COMMENT ME TO TEST HOT RELOAD [1]
}

console.log(b);

console.log(Shared.C);
