import { Pipe, PipeTransform } from '@angular/core';

@   Pipe({
  name: 'fomatshijiancha'
})
export class fomatshijianchaPipe implements PipeTransform {

    transform(shijiancha: any, args?: any): any {

        var days    = shijiancha / 1000 / 60 / 60 / 24;
        var daysRound   = Math.floor(days);
        var hours    = shijiancha/ 1000 / 60 / 60 - (24 * daysRound);
        var hoursRound   = Math.floor(hours);
        var minutes   = shijiancha / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
        var minutesRound  = Math.floor(minutes);
        var seconds   = shijiancha/ 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
        var secondsRound=Math.floor(seconds);


        return daysRound+'天'+hoursRound+'小时'+minutesRound+'分'+secondsRound+'秒';
    }

}
