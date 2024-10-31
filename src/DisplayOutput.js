import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants.js";
import Game from "./Game.js";

class DisplayOutput {

    displayPaidLotto(number) {
        MissionUtils.Console.print(`${number}개를 구입했습니다.`);
    }

    displayLotto (lotto){

        for (const lottoNumbers of lotto) {
            MissionUtils.Console.print(lottoNumbers);
        }
    }

    changeNumberStyle (number){
        return number.toLocaleString();
    }

    displayLottoResult (lottoResult){
        /**
         * 로또 결과 형식:
         * lottoResult = [[6등수, 5등수, 4등수, 3등수, 2등수, 1등수], [보너스 당첨자 수]]
         * @param {Array<Array<number>>} lottoResult - 2차원 배열
        */

        const prizeKeys = [ 'PRIZE_THREE_NUMBER_MATCHES', 'PRIZE_FOUR_NUMBER_MATCHES', 'PRIZE_FIVE_NUMBER_MATCHES',
            'PRIZE_FIVE_NUMBER_BONUS_MATCHES', 'PRIZE_SIX_NUMBER_MATCHES'
        ];
    
        MissionUtils.Console.print("당첨 통계\n---");
    
        for (let i = 0; i < 3; i++) {
            MissionUtils.Console.print(`${i + 3}개 일치 (${this.changeNumberStyle(LOTTO.PRIZE[prizeKeys[i]])}원) - ${lottoResult[0][i + 2]}개`);
        }
    
        // 보너스 당첨자 발표 및 6개 일치
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${this.changeNumberStyle(LOTTO.PRIZE.PRIZE_FIVE_NUMBER_BONUS_MATCHES)}원) - ${lottoResult[1][0]}개`);
        MissionUtils.Console.print(`6개 일치 (${this.changeNumberStyle(LOTTO.PRIZE.PRIZE_SIX_NUMBER_MATCHES)}원) - ${lottoResult[0][5]}개`);

    }

    displayProfit (profit) {
        MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);

    }

}

export default DisplayOutput;