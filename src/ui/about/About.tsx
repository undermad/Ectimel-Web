import ArrowedListItem from "./ArrowedListItem.tsx";


const About: React.FC = () => {

    const technologiesList: string[] = ["Java",  "Springboot","JavaScript",  "React", "Typescript", "MySQL"]


    return (
        <div className={"container p-10"}>
            <h1 className={"text-3xl mb-10"}>
                &nbsp;&nbsp;&nbsp;About me
            </h1>
            <p className={"text-xl tracking-normal font-normal"}>
                &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus
                ea eaque, error fugiat fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi
                porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deleniti doloribus ea eaque, error fugiat
                fugit hic incidunt labore omnis provident quisquam ullam vero? Earum ipsam modi porro sequi voluptate.
            </p>
            <br/>
            <p className={"text-xl tracking-normal font-normal"}>
                Here is a few technologies that I've been working with recently:</p>
            <div className={"grid grid-cols-2 w-1/2"}>
                {technologiesList.map((item: string, key: number) => {
                    return <ArrowedListItem key={key}>{item}</ArrowedListItem>
                })}
            </div>
        </div>
    );
}

export default About;
