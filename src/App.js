import Lotto from "../src/Lotto.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userLotto = null;
    this.winningNumber = null;
    this.bonusNumber = null;
  }
  async play() {
    this.requestPurchaseAmount();
  }
  
  async requestPurchaseAmount() {
    Console.print("구입 금액을 입력해 주세요.");
    const purchaseAmount = await Console.readLineAsync("");
    this.money = purchaseAmount;
    Console.print(purchaseAmount + "개를 구매했습니다.");
    // purchaseAmount isnan 함수로 판별하기

    new Lotto
  }

}

export default App;
