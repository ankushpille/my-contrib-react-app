function SearchBar(){

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };



    const handleSearch = debounce((event) => {
        console.log("Searching for:", event.target.value);
    }, 300);

    return (
        <>
         <input type="text" placeholder="Search..." onChange={handleSearch} />
         <button>Search</button>
        </>
    )
}

export default SearchBar;