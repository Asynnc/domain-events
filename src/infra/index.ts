import { randomInt, randomUUID } from 'node:crypto';
import { Order } from '../bounded-contexts/sales/order';
import { OrderCreateEvent } from '../bounded-contexts/sales/order-created';
import { OrderPaidEvent } from '../bounded-contexts/sales/order-paid';
import { DomainEvents } from '../core/DomainEvents';

// Order act like a Publisher
const order = Order.create({
  customerId: randomUUID(),
  productId: randomUUID(),
  amountInCents: randomInt(5),
  status: 'pending',
  createdAt: new Date(),
})

// Change status of order to paid
order.pay();

// Subscriber
DomainEvents.registerSubscriber(
  OrderCreateEvent.name,
  (event) => console.log(event)
)

DomainEvents.registerSubscriber(
  OrderPaidEvent.name,
  () => {
    console.log('Pago')
  }
)

// Grant finshed the order
// Inside layer persistence
DomainEvents.dispatchEventsForEntity(order.id)