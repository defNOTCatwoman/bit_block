import "./GameController.css";
import { Action, actionForKey, actionIsDrop } from "../utils/Input"
import { playerController } from "../utils/PlayerController"
import { useInterval } from "../hooks/useInterval"
import { useDropTime } from "../hooks/useDropTime"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai" 
import {GrRotateRight, GrDown} from "react-icons/gr"

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {

    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);

        if(actionIsDrop(action)) resumeDropTime();


    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        } else if (action === Action.Quit) {
            setGameOver(true);
        } else {
            if(actionIsDrop(action)) pauseDropTime();
            handleInput({ action });
        }

    };

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    };

    const leftClick = () => {
        handleInput({action: Action.Left});
    }

    const rightClick = () => {
        handleInput({action: Action.Right});
    }

    const rotateClick = () => {
        handleInput({action: Action.Rotate});
    }

    const fastClick = () => {
        handleInput({action: Action.FastDrop});
    }





    return (
        <div><input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
        <button className="btnLeft" onClick={leftClick}><AiFillCaretLeft/></button>
        <button className="btnRight" onClick={rightClick}><AiFillCaretRight/></button>
        <button className="btnRotate" onClick={rotateClick}><GrRotateRight/></button>
        <button className="btnFastDrop" onClick={fastClick}><GrDown/></button>
        </div>
    );
};

export default GameController;