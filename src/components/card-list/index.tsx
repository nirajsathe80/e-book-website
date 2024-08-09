import Card from "../common/card";

const CardList = async function () {
  let books = null;
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=24"
    );
    if (!response.ok) {
      throw new Error("Error fetching");
    }
    books = await response.json();
  } catch (err) {
    throw new Error("Error fetching");
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
      {books?.items?.map((item: any, index: number) => {
        return <Card book={item} key={index} />;
      })}
    </div>
  );
};

export default CardList;
