const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: "Ім'я являється обов'язковим",
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: "Email являється обов'язковим",
    },
    {
      rule: 'email',
      errorMessage: 'Email написаний некорректно',
    },
  ])
  .addField('#text', [
    {
      rule: 'required',
      errorMessage: "Текст є обов'язковим",
    },
  ]);

export default validation;
