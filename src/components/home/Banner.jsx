
const Banner = () => {


    const handleSubmit = (e)=>{

        e.preventDefault();  //prevents from reloading the page

    }


    return (
        <>
        


            <div className="text-center bg-img mb-10">
                <div>
                    <h2 className="text-3xl font-bold my-10 py-10 text-white">I Grow By Helping People In Need</h2>
                </div>
                <div>

                    <form onSubmit={handleSubmit}>
                    <input className="search-bar" type="text" name="category" id="" placeholder="Search here..." />
                    <input className="search-btn bg-red-900 text-white" type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        
        </>
    );
};

export default Banner;