import { Action, actionForKey, actionIsDrop } from "../utils/Input"
import { playerController } from "../utils/PlayerController"

const Controls = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {

    const handleClick = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    };

    return (
    <div>
        <button className="btnLeft" onClick={handleClick(Action.Left)}>L</button>
    </div>)
}

export default Controls;