export class Customer { 
    //이름 v
    name : string;
    //성별 v
    gender : number = 1;
    //나이 v
    age : number;

    //시/도
    city : number;
    //시/군/구
    price : number;

    //추천 여부
    hosRecCheck : number = 0;

    //흡연경헙여부 v
    smoking : number;  
    //흡연기간
    smoking_day_cut : number //담배 갑 개수
    smoking_day: number //몇 년
    //금연기간
    noSmoking_day : number //몇 년

    //(본인)관련질환 유무
    tcancer : number //갑상선암
    lcancer : number //간암
    scancer : number //위암
    cocancer : number //대장암
    ccancer : number //자궁경부암 , 성 경험이 있으면 1
    bcancer : number //유방암

    //(가족)관련질환 유무
    tcancer_F : number //갑상선암
    scancer_F : number //위암
    cocancer_F : number //대장암
    bcancer_F : number //유방암

    //검사주기
    //갑상선암
    tcancer_A : number = 6 //갑상선 초음파

    //간암
    lcancer_A : number = 6 // 간초음파

    //폐암
    lucancer_A: number = 6

    //대장암
    cocancer_A : number = 6 //분변장혈검사 
    cocancer_B : number = 6// 대장내시경 

    //위암: 
    scancer_A : number = 6 // 위장조염검사 
    scancer_B : number = 6 // 위내시경 

    //유방암: 
    bcancer_A : number = 6 //유방촬영 

    //자궁경부암:
    ccancer_A : number = 6 //자궁경부 세포검사  
    ccancer_B : number = 6 //인유두종 바이러스 검사 

} 