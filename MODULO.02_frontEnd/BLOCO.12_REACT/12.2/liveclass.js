// FUNÇÃO PADRÃO PARA FORMULÁRIOS, PRA IMPUTES
// EM REACT


handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
}
// essa função vai ser usada sempre que quiser fazer um imput em um formulário


// FUNÇÃO PADRÃO PARA "REJEX"
// verificação de e-mail

validEmail = (email) => {
  const isValid = email.match(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$);
  if (!isValid || email.length === 0) {
    return 'It is a invalid e-mail';
  }
}
