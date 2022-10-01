import React from 'react';
const SearchContext = React.createContext('');
export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {

    return (
        <SearchContext.Provider
            value={{
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;