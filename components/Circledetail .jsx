import React from 'react'

const Circledetail  = () => {
  return (
    <div className="xxxxx">
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        
        styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textColor: '#fff',
                 textSize: '36px',
                 textWeight:'700',
            })}
    />
</div>
  )
}

export default Circledetail; 