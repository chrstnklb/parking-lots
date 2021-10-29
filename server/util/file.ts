'use strict'

import {getActualDate} from './time'

export function getFilenameWithActualTimeStamp(postfix:String, extensions:String) : String{
    return getActualDate() + "-" + postfix + "." + extensions
}