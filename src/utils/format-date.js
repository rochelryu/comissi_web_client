import { fr } from 'date-fns/locale';
import { format, getTime, formatDistanceToNow } from 'date-fns';

export function fDateByDateString(date, newFormat) {
    const arrayDate = date.toString().split('-');
    const fm = newFormat || 'dd MMM yyyy';
  
    return date ? format(new Date(parseInt(arrayDate[0], 10), parseInt(arrayDate[1], 10) - 1, parseInt(arrayDate[2], 10)), fm, {locale: fr}) : '';
  }