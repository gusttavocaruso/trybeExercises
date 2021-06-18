const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, telefone ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, ${order.address.apartment}`
}
customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment = 50;
  return `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é de R$ ${order.payment}`
}
orderModifier(order);