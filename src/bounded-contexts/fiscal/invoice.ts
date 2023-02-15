import { EntityBase } from '../../core/Entity';

interface InvoiceProps {
  orderId: string;
  createdAt: Date;
}

export class Invoice extends EntityBase<InvoiceProps> {

  get orderId(){
    return this.props.orderId
  }

  get createdAt(){
    return this.props.createdAt
  }

  static create(props: InvoiceProps) {
    const invoice = new Invoice(props);
    return invoice;
  }

}