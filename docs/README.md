# 구현 기능 목록
1. 로또 구입 금액 입력받기
 - 금액은 1,000원 단위로 입력
 - 1~45 사이 중복되지 않는 숫자 6개 입력받기
2. 당첨 번호 입력받기
 - 당첨 번호는 쉼표(,)를 기준으로 6개 입력
 - 보너스 번호 입력받기
3. 당첨 여부 확인
 - 사용자 번호와 당첨 번호 비교
    - 일치하는 번호 개수 구하기
    - 조건에 따라 등수 정하기
        1. 1등 : 6개의 번호 일치시
        2. 2등 : 5개 번호와 보너스 번호 일치시
        3. 3등 : 5개 번호 일치시
        4. 4등 : 4개 번호 일치시
        5. 5등 : 3개 번호 일치시
4. 수익률 계산
 - 수익률은 구매한 금액 / 당첨된 금액으로 계산한다. 
 - 소수점 둘째 자리에서 반올림한다.

5. 당첨 내역 출력
 - 당첨된 내역에 따라 등수별로 출력