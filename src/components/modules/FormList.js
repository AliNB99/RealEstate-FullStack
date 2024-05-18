import { MdOutlineLibraryAdd } from "react-icons/md";

function FormList({ form, setForm, title, name }) {
  const addItemHandler = () => {
    const list = [...form[name]];
    list.push("");
    setForm((form) => ({ ...form, [name]: list }));
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...form[name]];
    list[index] = value;
    setForm((form) => ({ ...form, [name]: list }));
  };

  const deleteHandler = (index) => {
    const list = [...form[name]];
    list.splice(index, 1);
    setForm((form) => ({ ...form, [name]: list }));
  };

  return (
    <div className="space-y-2">
      <label>{title}</label>
      <div className="flex flex-col gap-3">
        {form[name].map((item, index) => (
          <div key={index} className="flex gap-2 w-full lg:w-1/2">
            <input
              type="text"
              value={item}
              onChange={(e) => changeHandler(e, index)}
              className="w-full border-2 rounded-md p-2"
            />
            <button
              onClick={() => deleteHandler(index)}
              type="button"
              className="bg-red-100 text-red-500 px-5 rounded-md font-medium"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addItemHandler}
        className="bg-green-100 text-green-500 flex items-center gap-2 p-2 rounded-md"
      >
        <span className="font-medium">افزودن</span>
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default FormList;
