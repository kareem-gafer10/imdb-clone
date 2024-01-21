import Results from "@/components/Results";
import axios from "axios";

const SearchPage = async ({ params }) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=c0a753282bdc2008ffe4d6e4e1d6462c&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  const result = await data.results;

  return (
    <div>
      {result && result.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {result && <Results result={result} />}
    </div>
  );
};

export default SearchPage;
