import { Console, MissionUtils } from "@woowacourse/mission-utils";
import {MONEY} from "./const-module";
class InitLotto {

  constructor(money) {
    this.#validate(money);
    this.ticketsNum = money / MONEY.UNIT;
  }

  #validate(money) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    // 중복된 numbers 가 있다면 에러 던지기
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않은 수 6개여야 합니다.")
    }

    // 입력된 타입이 적절한지 판단 테스트 추가할 것.
    // 적절한 입력인지 판단 테스트 추가

  }

  // TODO: 추가 기능 구현
}

export default Lotto;