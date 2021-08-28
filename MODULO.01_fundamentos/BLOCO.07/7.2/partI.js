// PART I
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create(
  {}, 
  { 
    getFoo: { 
      value: function() { 
        return this.foo; 
      } 
    } 
  }
);
my_obj.foo = 1;
console.log(Object.keys(my_obj)); // console: ['foo']
