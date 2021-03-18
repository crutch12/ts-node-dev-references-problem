import './server';

import * as Shared from '../../shared/src';
import * as InnerTest from './innerTest';

console.log('test project');

console.log('"a" value must be hot reloaded:', Shared.NON_HOT_RELOAD_VALUE); // COMMENT ME TO TEST HOT RELOAD [0]

const b: Shared.NON_HOT_RELOAD_TYPE = {
    a: 4, // COMMENT ME TO TEST HOT RELOAD [1]
}

console.log(b);

console.log(Shared.NON_HOT_RELOAD_ENUM);

type HOT_RELOAD_TYPE = {
    c: number;
    d: string; // COMMENT ME TO TEST HOT RELOAD
}

const hotReloadValue: HOT_RELOAD_TYPE = {
    c: 3,
    d: '',
}

const innerHotReloadValue: InnerTest.NON_HOT_RELOAD_TYPE = {
    c: 5,
    d: '',
}