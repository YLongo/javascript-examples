import {area, circumference} from "./circle.mjs";
{
    console.log('area', area(4));
    console.log('circumference', circumference(14));
}

console.log('\n整体加载');
import * as circle from "./circle.mjs";

{
    console.log('area', circle.area(4));
    console.log('circumference', circle.circumference(14));
}


