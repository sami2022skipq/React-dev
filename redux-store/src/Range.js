const SimpleSlider = () => {

    const [ value, setValue ] = React.useState(50);
  
    return (
      <RangeSlider
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  
  };