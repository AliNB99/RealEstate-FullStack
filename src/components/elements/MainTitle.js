function MainTitle({ color, bgColor, children }) {
  return (
    <h1
      className={`${color} ${bgColor} mt-32 md:mt-0 w-full h-fit font-semibold text-xl p-3 pr-5 rounded-md`}
    >
      {children}
    </h1>
  );
}

export default MainTitle;
