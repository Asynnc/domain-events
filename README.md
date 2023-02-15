# Domain Events

## Bounded Contexts

Dentro do DDD (Domain Driven Design), são os contextos da nossa aplicação (módulos / microsserviços).

## Porque Domain Events?

- Se comunicar entre os Bounded Contexts da aplicação
- 

## Exemplo da vida real:

### Vendas (Sales)

- Fechar a venda (UseCase);

### Fiscal (Fiscal)
Obs: (UseCase) são as ações que os usuários podem executar

- Emitir nota fiscal (UseCase);
- Cancelar nota fiscal (UseCase);

## Problemática

- Como que, ao fechar a venda, eu farei a emissão da nota fiscal?


## Diagrama de casos de uso

Atores -> Casos de uso

# Pub/Sub

- Publish (publicadores) / Subscriber (inscritos)

```js
subscribeToEvent('order-created', submitInvoice());
```

```js
const subscribers = {
  'order-created': [submitInvoice()]
}
```

```js
function createOrder(){
  publishEvent('order-created', {
    id: 1,
    customerId: '3951e462-6561-41aa-a93d-862fe1fe6b90'
  })
}

const eventSubscribers = subscribers['order-created']
```