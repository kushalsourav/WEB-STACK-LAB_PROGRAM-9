import { useData } from '../../DataContext/DataContext';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import "./Home.css";

const Home = () => {

  const {data, setData} = useData();

  return (
    <div className="home">
          <SearchBar filterText={data.search} setData={setData} />
          <Card books={data.books}  filterText={data.search} bookId={data.ID} setData={setData} reviews={data.review} />
    </div>
  );
};

export default Home;