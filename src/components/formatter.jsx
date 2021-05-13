import React from 'react';

const Formatter = ({item}) => {

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += item.value === 0 ? "warning" : "primary";
    return classes;
  };
    
  const formatCount = () => {
    const { value } = item;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className="col-md-1">
      <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
        {formatCount()}
      </span>
    </div>
  )
}


export default Formatter;