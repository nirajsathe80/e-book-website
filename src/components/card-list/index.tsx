import Card from "../common/card";

const CardList = function ({ books = [] }: { books: any }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {books?.map((item: any, index: number) => {
        return <Card book={item} key={index} />;
      })}
    </div>
  );
};

export default CardList;
