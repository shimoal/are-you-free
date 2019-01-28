import IOption from './IOption';

export default interface IEvent {
	id: number,
	createdBy: string,
	title: string,
	options: Array<IOption>
}