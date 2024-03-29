import Results from "@/components/Results";
import axios from "axios";

const API_KEY=process.env.API_KEY



const Home = async({searchParams}) => {
  const generate = searchParams.generate || "Trending";
  const{data}= await axios.get(`https://api.themoviedb.org/3/${generate === "TopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=c0a753282bdc2008ffe4d6e4e1d6462c&language=en-US&page=1`,
  { next: { revalidate: 10000 } })
  
  const result = await data.results;





  return (
    <>
     <Results result={result} />
    </>
  )
}

export default Home