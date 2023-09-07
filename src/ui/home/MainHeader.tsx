import RubberAnim from "../animation/RubberAnim.tsx";

interface MainHeaderProps {
    text: string,
    tailwindcss?: string,
}

function MainHeader({text, tailwindcss}: MainHeaderProps) {
    const arrLetters: string[] = text.split("");

    return (
        <span className={`text-9xl ${tailwindcss}`}>
            {arrLetters.map((letter: string, index: number) => {
                return <RubberAnim key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </RubberAnim>
            })}
        </span>
    );
}

export default MainHeader;