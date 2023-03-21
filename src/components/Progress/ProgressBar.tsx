interface ProgressBarProps {
    valueNow: number;
    valueMin: number;
    valueMax: number;
}

const ProgressBar = ({
    valueNow = 0,
    valueMin = 0,
    valueMax = 100
}: ProgressBarProps) => {
    return (
        <div className="progress">
            <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={valueNow}
                aria-valuemin={valueMin}
                aria-valuemax={valueMax}
                style={{ width: `${valueNow}%` }}
            >{`${valueNow}%`}</div>
        </div>
    )
}

export default ProgressBar;