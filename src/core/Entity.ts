import { randomUUID } from "node:crypto";
import { DomainEvent } from "./DomainEvent";
import { DomainEvents } from './DomainEvents';

export abstract class EntityBase<Props> {

  protected readonly _id: string;
  protected props: Props
  private _domainEvents: DomainEvent[] = []

  protected addDomainEvent(domainEvent: DomainEvent) {
    this._domainEvents.push(domainEvent);
    DomainEvents.markEntityForDispatch(this)
  }

  protected constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public removeDomainEvent() {
    this._domainEvents = []
  }

  get id() {
    return this._id;
  }

  get domainEvents(){
    return this._domainEvents
  }

}