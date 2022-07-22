import React from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
const Rating: React.FC<RatingPropsType> = ({value}) => {
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    );
};

export default Rating;
type PropsStarType = {
    selected: boolean
}
const Star = ({selected}: PropsStarType) => {
    let res = selected ? <strong>Star</strong> : 'Star'
    return <span>{res}</span>

}