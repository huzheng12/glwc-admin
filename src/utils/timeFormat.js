
import moment from 'moment'

export function timeFormat(val) {
  console.log(moment(val).format('YYYY-MM-DD'));
  return moment(val).format('YYYY-MM-DD');
}




export function _k(val) {
  return JSON.parse(JSON.stringify(val))
}