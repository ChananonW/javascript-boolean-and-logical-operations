// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 =true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion =true;

console.log(hasPromotion);
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday) && (!hasBoughtProductFromITCategory && !hasAttendedDiscountEvent && !isPlatinum);
console.log(hasPromotion);

//johnMemberPlatinum
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday) && (!hasBoughtProductFromITCategory && hasAttendedDiscountEvent && isPlatinum);
console.log(hasPromotion)