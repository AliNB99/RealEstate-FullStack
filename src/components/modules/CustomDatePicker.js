import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

function CustomDatePicker({ form, setForm, title }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setForm((form) => ({ ...form, constructionDate: date }));
  };

  return (
    <div className="flex flex-col gap-2">
      <label>{title}</label>
      <DatePicker
        animations={[
          opacity(),
          transition({
            from: 40,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
        name="constructionDate"
        value={form.constructionDate}
        onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="top-right"
      />
    </div>
  );
}

export default CustomDatePicker;
