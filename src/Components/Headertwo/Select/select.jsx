import "./style.css"


const options = [
    {
      value: '1',
      label: 'Option 1',
      img1: '../../',
      img2: 'group.png',
    },
    {
      value: '2',
      label: 'Option 2',
      img1: 'cryptoicons.png',
      img2: 'group.png',
    },
    {
      value: '3',
      label: 'Option 3',
      img1: 'cryptoicons.png',
      img2: 'group.png',
    },
  ];


const Select = () => {


    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);


  return (
    <>
        <div className="custom-select" ref={selectRef}>
      <div className="custom-select__trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <div className="arrow"></div>
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-option"
              onClick={() => handleOptionClick(option)}
            >
              <span>
                <img src={option.img1} alt="Icon 1" />
                <img src={option.img2} alt="Icon 2" />
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
      <select className="custom-select__real-select" value={selectedOption ? selectedOption.value : ''} onChange={() => {}} hidden>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    </>
  )
}

export default Select