export const NON_HOT_RELOAD_VALUE = 1; // COMMENT ME TO TEST HOT RELOAD [2]

 // (!!!!) here is the problem - if you comment this line after "npm run dev" you won't see error until manually run command again !
export type NON_HOT_RELOAD_TYPE = { // COMMENT ME TO TEST HOT RELOAD [3]
    a: number;
}

// here is the problem too - if you comment this, code hot reloads, but you don't see error - just "undefined" on the other side (so JS works fine, but TS - NO)
export enum NON_HOT_RELOAD_ENUM { // COMMENT ME TO TEST HOT RELOAD [4]
    C = 'C'
}