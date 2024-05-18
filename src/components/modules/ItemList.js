function ItemList({ data }) {
  return (
    <div>
      {data.length ? (
        <ul className="space-y-3 list-disc marker:text-blue-600 list-inside">
          {data.map((item, index) => (
            <li className="font-medium" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-orange-500 font-medium">هیچ موردی ذکر نشده است.</p>
      )}
    </div>
  );
}

export default ItemList;
