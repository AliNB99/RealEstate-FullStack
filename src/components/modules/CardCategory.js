import Image from "next/image";
import Link from "next/link";

function CardCategory({ name, title }) {
  return (
    <Link
      className="hover:rotate-3 hover:shadow-normal transition-all"
      href={{ pathname: "/advertisements", query: { category: name } }}
    >
      <div className="shadow-normal p-2 rounded-xl">
        <Image
          className="rounded-xl"
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="text-center font-semibold text-blue-500 p-2">{title}</p>
      </div>
    </Link>
  );
}

export default CardCategory;
