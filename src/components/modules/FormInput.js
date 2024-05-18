function FormInput({
  name,
  form,
  setForm,
  title,
  type,
  placeholder,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-2">
      {title && <label>{title}</label>}
      {textarea ? (
        <textarea
          className="p-3 border-2 rounded-md w-full"
          name={name}
          value={form[name]}
          onChange={changeHandler}
          rows={6}
        />
      ) : (
        <input
          className="p-3 border-2 rounded-md w-full"
          placeholder={placeholder && placeholder}
          type={type}
          name={name}
          value={form[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default FormInput;
