import IOption from "./IOption";

export default interface IEvent {
	id: number;
	createdBy: string;
	description: string;
	title: string;
	options: Array<IOption>;
	linkID: string;
}
