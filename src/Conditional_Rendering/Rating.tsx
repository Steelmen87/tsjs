import React, {useState} from 'react';
import style from './Star.module.css'

type RatingPropsType = {}

const Rating: React.FC<RatingPropsType> = (props) => {
    let [selected, setSelect] = useState(0)
    const arrayStar = [1, 2, 3, 4, 5]
    return (
        <div  className={style.comp_star_div}>
            {arrayStar.map((s, i) => {
                return (<span key={i}>
                    <Star
                        setSelect={setSelect}
                        index={i}
                        selected={selected}/>
                </span>
                )
            })}
        </div>
    );
};

export default Rating;

type PropsStarType = {
    selected: number
    setSelect: (n: number) => void
    index: number
}
const Star = ({selected, setSelect, index}: PropsStarType) => {
    let res = selected >= index ? <strong>Star</strong> : 'Star'
    const onSelected = () => setSelect(index)
    return <div
        className={style.comp_star}
        onClick={onSelected}>
        {res}
    </div>


}
