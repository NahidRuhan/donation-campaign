import { useState } from "react";
import Banner from "./Banner";
import Cards from "./Cards";

const Home = () => {

    const [search,setSearch] = useState();

    return (
        <div className="space-y-14">

            <Banner setSearch={setSearch}></Banner>
            <Cards search={search}></Cards>

        </div>
    );
};

export default Home;