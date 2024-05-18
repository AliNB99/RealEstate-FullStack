function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between bg-blue-500 text-white mx-4 mb-2 mt-16 p-5 rounded-md">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">سامانه خرید و اجاره ملک</h3>
        <p className="text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div className="flex justify-start gap-20 md:gap-0">
        <ul className="md:w-56 gap-4 mr-4 list-disc *:font-semibold space-y-2">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
        <ul className="md:w-56 gap-4 mr-4 list-disc *:font-semibold space-y-2">
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>فضای مجازی</li>
          <li>گزارش خطا</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
