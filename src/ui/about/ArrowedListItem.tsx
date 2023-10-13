import {MdOutlineKeyboardArrowRight} from "react-icons/md";


const ArrowedListItem: React.FC<{
    children: React.ReactNode;
}> = (props) => {
    return (
        <div className={"flex items-center text-xl mb-1 "}>
            <MdOutlineKeyboardArrowRight style={{color: "white"}}/>
            {props.children}
        </div>
    );
}

export default ArrowedListItem;