import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constans";



const Home = () =><>
  <BookOverview  {...sampleBooks[0]} />
  
  <BookList
    title="Latest Books"
    books={sampleBooks}
    containerClassName="mt-28"
  />
</>  


export default Home;