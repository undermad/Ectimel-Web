import MainHeader from "./MainHeader.tsx";

function Home() {

    return (
        <section
            className={"font-medium container w-screen relative"}>

            <div className={"absolute left-1/2"}>
                <div className={"flex flex-col -translate-x-1/2 mt-32"}>
                    <MainHeader text="Dominik"/>
                    <MainHeader text="Tworek"/>
                    <p>Creative developer</p>
                </div>
            </div>


        </section>
    );
}

export default Home;