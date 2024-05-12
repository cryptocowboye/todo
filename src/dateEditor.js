import {format} from 'date-fns'

export default function dateEditor (date) {
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
}