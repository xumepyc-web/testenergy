import InCard from "../components/InCard";
import Tags from "../components/Tags";
import AlertMessage from "../components/Alert";
import Slides from "../components/Slides";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <>
            <Slides />
            <InCard />
            <AlertMessage />
            <Cards />
            <Tags />
        </>
    )
}
export default Home;