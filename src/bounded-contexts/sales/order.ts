import { EntityBase } from '../../core/Entity';
import { OrderCreateEvent } from './order-created';
import { OrderPaidEvent } from './order-paid';

interface OrderProps {
  customerId: string;
  productId: string;
  amountInCents: number;
  status: 'pending' | 'paid',
  createdAt: Date;
}

export class Order extends EntityBase<OrderProps> {

  get customerId(){
    return this.props.customerId
  }

  get productId(){
    return this.props.customerId
  }

  get amountInCents(){
    return this.props.customerId
  }

  get status(){
    return this.props.customerId
  }

  pay(){
    this.props.status = 'paid';
    this.addDomainEvent(new OrderPaidEvent(this));
  }

  get createdAt(){
    return this.props.customerId
  }

  static create(props: OrderProps, id?: string) {
    const order = new Order(props);

    if(!id){
      // Create a new order / create a new sell
      order.addDomainEvent(new OrderCreateEvent(order));
    }
    return order;
  }

}