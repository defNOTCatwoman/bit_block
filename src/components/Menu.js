import "./Menu.css";

const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="Button" onClick={onClick}>Play Bit Block</button>
            </div>
    );
};

export default Menu;