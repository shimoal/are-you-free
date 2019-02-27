export default interface ICalendarViewProps {
	date: any;
	removeOption: (optionIndex: number, event: any) => void;
	selectOption: (event: any, value: string) => void;
}
