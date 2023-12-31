import { A_DAY_IN_SECONDS, A_MINUTE_IN_SECONDS, A_WEEK_IN_SECONDS, A_YEAR_IN_SECONDS, EIGHT_DAYS_IN_SECONDS, EIGHT_MINUTES_IN_SECONDS, EIGHT_YEARS_IN_SECONDS, FIFTEEN_MINUTES_IN_SECONDS, FIVE_DAYS_IN_SECONDS, FIVE_MINUTES_IN_SECONDS, FIVE_YEARS_IN_SECONDS, FORTY_FIVE_MINUTES_IN_SECONDS, FOUR_DAYS_IN_SECONDS, FOUR_MINUTES_IN_SECONDS, FOUR_YEARS_IN_SECONDS, NINE_DAYS_IN_SECONDS, NINE_MINUTES_IN_SECONDS, NINE_YEARS_IN_SECONDS, SEVEN_DAYS_IN_SECONDS, SEVEN_MINUTES_IN_SECONDS, SEVEN_YEARS_IN_SECONDS, SIX_DAYS_IN_SECONDS, SIX_MINUTES_IN_SECONDS, SIX_YEARS_IN_SECONDS, TEN_DAYS_IN_SECONDS, TEN_MINUTES_IN_SECONDS, TEN_YEARS_IN_SECONDS, THIRTY_MINUTES_IN_SECONDS, THREE_DAYS_IN_SECONDS, THREE_MINUTES_IN_SECONDS, THREE_WEEK_IN_SECONDS, THREE_YEARS_IN_SECONDS, TWO_DAYS_IN_SECONDS, TWO_MINUTES_IN_SECONDS, TWO_WEEK_IN_SECONDS, TWO_YEARS_IN_SECONDS } from "./constants";
import { getDaysInSeconds, getHoursInSeconds } from "./converters";

describe("Seconds module", () => {
	it("converts minutes", ()=> {
		expect(A_MINUTE_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS);
		expect(TWO_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 2);
		expect(THREE_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 3);
		expect(FOUR_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 4);
		expect(FIVE_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 5);
		expect(SIX_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 6);
		expect(SEVEN_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 7);
		expect(EIGHT_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 8);
		expect(NINE_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 9);
		expect(TEN_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 10);
		expect(FIFTEEN_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 15);
		expect(THIRTY_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 30);
		expect(FORTY_FIVE_MINUTES_IN_SECONDS).toBe(A_MINUTE_IN_SECONDS * 45);
	});

	it("converts days", ()=> {
		const aDayInSeconds = getHoursInSeconds(24);
		expect(A_DAY_IN_SECONDS).toBe(aDayInSeconds);
		expect(TWO_DAYS_IN_SECONDS).toBe(aDayInSeconds * 2);
		expect(THREE_DAYS_IN_SECONDS).toBe(aDayInSeconds * 3);
		expect(FOUR_DAYS_IN_SECONDS).toBe(aDayInSeconds * 4);
		expect(FIVE_DAYS_IN_SECONDS).toBe(aDayInSeconds * 5);
		expect(SIX_DAYS_IN_SECONDS).toBe(aDayInSeconds * 6);
		expect(SEVEN_DAYS_IN_SECONDS).toBe(aDayInSeconds * 7);
		expect(EIGHT_DAYS_IN_SECONDS).toBe(aDayInSeconds * 8);
		expect(NINE_DAYS_IN_SECONDS).toBe(aDayInSeconds * 9);
		expect(TEN_DAYS_IN_SECONDS).toBe(aDayInSeconds * 10);
	});

	it("converts weeks", ()=> {
		expect(A_WEEK_IN_SECONDS).toBe(SEVEN_DAYS_IN_SECONDS);
		expect(TWO_WEEK_IN_SECONDS).toBe(SEVEN_DAYS_IN_SECONDS * 2);
		expect(THREE_WEEK_IN_SECONDS).toBe(SEVEN_DAYS_IN_SECONDS * 3);
	});

	it("converts years", ()=> {
		const aYearInSeconds = getDaysInSeconds(365);
		expect(A_YEAR_IN_SECONDS).toBe(aYearInSeconds);
		expect(TWO_YEARS_IN_SECONDS).toBe(aYearInSeconds * 2);
		expect(THREE_YEARS_IN_SECONDS).toBe(aYearInSeconds * 3);
		expect(FOUR_YEARS_IN_SECONDS).toBe(aYearInSeconds * 4);
		expect(FIVE_YEARS_IN_SECONDS).toBe(aYearInSeconds * 5);
		expect(SIX_YEARS_IN_SECONDS).toBe(aYearInSeconds * 6);
		expect(SEVEN_YEARS_IN_SECONDS).toBe(aYearInSeconds * 7);
		expect(EIGHT_YEARS_IN_SECONDS).toBe(aYearInSeconds * 8);
		expect(NINE_YEARS_IN_SECONDS).toBe(aYearInSeconds * 9);
		expect(TEN_YEARS_IN_SECONDS).toBe(aYearInSeconds * 10);
	});
});