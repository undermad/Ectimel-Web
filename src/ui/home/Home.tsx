import MainHeader from "./MainHeader.tsx";

function Home() {

    return (
        <section className={"bg-ectimel-navy-950 text-ectimel-grey-light font-medium container w-screen"}>
            <MainHeader text={"H"} tailwindcss="text-ectimel-red"/><MainHeader text="i,"/>
            <br/>
            <MainHeader text="I'm "/>
            <MainHeader text="D" tailwindcss="text-ectimel-red"/>
            <MainHeader text="ominik,"/>
            <br/>
            <MainHeader text="The SuperHuman."/>


        </section>
    );
}

export default Home;